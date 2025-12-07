from __future__ import annotations
import aiohttp
import async_timeout
from datetime import timedelta
import logging

from homeassistant.components.sensor import SensorEntity
from homeassistant.const import TEMP_CELSIUS
from homeassistant.helpers.update_coordinator import (
    DataUpdateCoordinator,
    CoordinatorEntity,
)
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry

from .const import DOMAIN, CONF_API_KEY, CONF_LAT, CONF_LON, DEFAULT_NAME

_LOGGER = logging.getLogger(__name__)

UPDATE_INTERVAL = timedelta(minutes=10)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, async_add_entities):
    api_key = entry.data.get(CONF_API_KEY)
    lat = entry.data.get(CONF_LAT)
    lon = entry.data.get(CONF_LON)

    session = aiohttp.ClientSession()
    coordinator = OpenWeatherCoordinator(hass, session, api_key, lat, lon)

    await coordinator.async_config_entry_first_refresh()

    sensor = OpenWeatherTemperatureSensor(coordinator)
    async_add_entities([sensor])


class OpenWeatherCoordinator(DataUpdateCoordinator):
    def __init__(self, hass, session, api_key, lat, lon):
        """Initialize the coordinator."""
        self.session = session
        self.api_key = api_key
        self.lat = lat
        self.lon = lon

        super().__init__(
            hass,
            _LOGGER,
            name="OpenWeather Custom",
            update_interval=UPDATE_INTERVAL,
        )

    async def _async_update_data(self):
        """Fetch new data from OpenWeatherMap."""
        url = (
            f"https://api.openweathermap.org/data/2.5/weather?"
            f"lat={self.lat}&lon={self.lon}&appid={self.api_key}&units=metric"
        )

        _LOGGER.debug("Fetching URL: %s", url)

        try:
            async with async_timeout.timeout(10):
                async with self.session.get(url) as response:
                    data = await response.json()
                    return data
        except Exception as err:
            _LOGGER.error("Error fetching OpenWeather data: %s", err)
            raise


class OpenWeatherTemperatureSensor(CoordinatorEntity, SensorEntity):
    """Temperature sensor."""

    _attr_name = DEFAULT_NAME
    _attr_native_unit_of_measurement = TEMP_CELSIUS

    @property
    def unique_id(self):
        return "openweather_custom_temperature"

    @property
    def native_value(self):
        """Return the temperature."""
        if self.coordinator.data:
            return self.coordinator.data["main"]["temp"]
        return None
