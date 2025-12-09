from __future__ import annotations
import logging
import aiohttp

from homeassistant.core import HomeAssistant
from homeassistant.components.sensor import SensorEntity

from .const import (
    DOMAIN,
    CONF_API_KEY,
    CONF_LAT,
    CONF_LON,
    DEFAULT_NAME,
)

_LOGGER = logging.getLogger(__name__)

API_URL = "https://api.openweathermap.org/data/3.0/onecall"


async def async_setup_entry(hass: HomeAssistant, entry, async_add_entities):
    """Set up the OpenWeather sensor."""

    sensor = OpenWeatherSensor(entry)
    async_add_entities([sensor], update_before_add=True)


class OpenWeatherSensor(SensorEntity):
    """OpenWeather One Call 3.0 temperature sensor."""

    _attr_name = DEFAULT_NAME
    _attr_unique_id = "openweather_forecast_current_temp"
    _attr_native_unit_of_measurement = "°F"
    _attr_device_class = "temperature"
    _attr_state_class = "measurement"
    _attr_icon = "mdi:thermometer"

    #def __init__(self):
    #    self._data = {}

    def __init__(self, entry):
        self.entry = entry
        self._data = {}

        # Register this sensor under a device
        self._attr_device_info = {
            "identifiers": {(DOMAIN, "openweather_forecast_device")},
            "name": "OpenWeather Forecast",
            "manufacturer": "OpenWeather",
        }

    @property
    def native_value(self):
        """Return the sensor value (current temperature)."""
        return self._data.get("current_temp")

    @property
    def extra_state_attributes(self):
        """More data from the API."""
        return {
            "description": self._data.get("current_weather"),
            "humidity": self._data.get("humidity"),
            "wind_speed": self._data.get("wind_speed"),
        }

    async def async_update(self):
        """Fetch updated weather data."""

        params = {
            "lat": CONF_LAT,
            "lon": CONF_LON,
            "appid": CONF_API_KEY,
            "units": "imperial",        # metric or imperial
            "exclude": "minutely",    # optional: save bandwidth
        }

        async with aiohttp.ClientSession() as session:
            try:
                response = await session.get(API_URL, params=params)

                if response.status != 200:
                    _LOGGER.error(
                        "OpenWeather API error %s (%s)",
                        response.status,
                        await response.text(),
                    )
                    return

                data = await response.json()

                # Temp
                self._data["current_temp"] = data["current"]["temp"]

                # Conditions
                self._data["current_weather"] = data["current"]["weather"][0]["description"]

                # Extras
                self._data["humidity"] = data["current"].get("humidity")
                self._data["wind_speed"] = data["current"].get("wind_speed")

                _LOGGER.debug("OpenWeather updated: %s", self._data)

            except Exception as err:
                _LOGGER.error("Error fetching OpenWeather data: %s", err)
