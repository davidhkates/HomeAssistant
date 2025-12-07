from __future__ import annotations
import aiohttp
import async_timeout
from datetime import timedelta
import logging

from homeassistant.components.sensor import SensorEntity
from homeassistant.const import TEMP_CELSIUS, UnitOfTemperature # Added UnitOfTemperature
from homeassistant.helpers.update_coordinator import (
    DataUpdateCoordinator,
    CoordinatorEntity,
)
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry

from .const import DOMAIN, CONF_API_KEY, CONF_LAT, CONF_LON, DEFAULT_NAME
# from .forecast_models import get_min_low_temp # Removed this import as the logic is now inside this file

_LOGGER = logging.getLogger(__name__)

UPDATE_INTERVAL = timedelta(minutes=10)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities):
    api_key = entry.data.get(CONF_API_KEY)
    lat = entry.data.get(CONF_LAT)
    lon = entry.data.get(CONF_LON)

    session = aiohttp.ClientSession()
    coordinator = OpenWeatherCoordinator(hass, session, api_key, lat, lon)

    await coordinator.async_config_entry_first_refresh()

    sensor = OpenWeatherMinLowTempSensor(coordinator)
    async_add_entities([sensor])


class OpenWeatherCoordinator(DataUpdateCoordinator):
    def __init__(self, hass, session, api_key, lat, lon):
        """Initialize the coordinator."""
        self.session = session
        self.api_key = api_key
        self.lat = lat
        self.lon = lon
        # Assuming we want imperial units if the original function used them,
        # but Home Assistant standardizes to Metric internally usually.
        # We will use 'metric' for the API call below and use TEMP_CELSIUS for the sensor unit.

        super().__init__(
            hass,
            _LOGGER,
            name="OpenWeather Custom Min Temp",
            update_interval=UPDATE_INTERVAL,
        )

    async def _async_update_data(self):
        """Fetch new data from OpenWeatherMap and process it to find the minimum low temp."""
        
        # Using the V3 One Call API. Exclude everything except 'hourly' data.
        # Note: The 'hourly' forecast gives temperature points every hour.
        url = (
            f"https://api.openweathermap.org/data/3.0/onecall?"
            f"lat={self.lat}&lon={self.lon}&appid={self.api_key}&units=metric&exclude=current,minutely,daily,alerts"
        )
        
        # Use 'imperial' if you prefer Fahrenheit/MPH at the API level:
        # url = url.replace("&units=metric", "&units=imperial") 

        _LOGGER.debug("Fetching URL: %s", url)

        try:
            async with async_timeout.timeout(10):
                async with self.session.get(url) as response:
                    raw_data = await response.json()
                    
                    # --- Start of your processing logic, adapted for V3 'hourly' data ---
                    
                    # Extract the next 12 hourly forecast entries
                    # V3 uses 'hourly' as the key, not 'list'
                    forecasts = raw_data.get("hourly", [])[:12] 

                    lows = []

                    for f in forecasts:
                        # V3 hourly data uses 'temp' as the key directly under the hourly object, not main.temp_min
                        temp = f.get("temp") 
                        if temp is not None:
                            lows.append(temp)

                    if not lows:
                        # Log an error rather than raising a ValueError in update_data
                        _LOGGER.error("No hourly forecast data found in response.")
                        # Return existing data or a default if appropriate
                        return self.coordinator.data or {"min_low_temp": None}

                    min_temp = min(lows)
                    
                    # --- End of processing logic ---

                    # The coordinator will now store a simple dictionary with the final value
                    return {"min_low_temp": min_temp}

        except Exception as err:
            _LOGGER.error("Error fetching or processing OpenWeather data: %s", err)
            raise


class OpenWeatherMinLowTempSensor(CoordinatorEntity, SensorEntity):
    """Minimum Low Temperature sensor."""

    _attr_name = f"{DEFAULT_NAME} Min Low Temp"
    _attr_native_unit_of_measurement = UnitOfTemperature.CELSIUS # Best practice HA enum

    @property
    def unique_id(self):
        return "openweather_custom_min_low_temperature"

    @property
    def native_value(self):
        """Return the minimum low temperature."""
        if self.coordinator.data and "min_low_temp" in self.coordinator.data:
            # Return the pre-calculated value
            return self.coordinator.data["min_low_temp"]
        return None
