from __future__ import annotations
import logging
import aiohttp
#from homeassistant.helpers.entity import Entity
from homeassistant.components.sensor import SensorEntity
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import CoordinatorEntity

#from .const import DOMAIN, DEFAULT_NAME
from .const import DOMAIN, CONF_API_KEY, CONF_LAT, CONF_LON, DEFAULT_NAME

_LOGGER = logging.getLogger(__name__)
API_URL = "https://api.openweathermap.org/data/3.0/onecall"

async def async_setup_entry(hass: HomeAssistant, entry, async_add_entities):
    coordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_entities([OpenweatherSensor(coordinator)])


"""
class OpenweatherSensor(CoordinatorEntity, SensorEntity):
    _attr_name = DEFAULT_NAME
    _attr_unique_id = "openweather_forecast_sensor"

    @property
    def native_value(self):
        return self.coordinator.data.get("value")
"""


"""
from __future__ import annotations
import logging
import aiohttp
from homeassistant.helpers.entity import Entity
#from homeassistant.const import TEMP_CELSIUS
from .const import DOMAIN, CONF_API_KEY, CONF_LAT, CONF_LON, DEFAULT_NAME

_LOGGER = logging.getLogger(__name__)
API_URL = "https://api.openweathermap.org/data/3.0/onecall"

#async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
#    async_add_entities([OpenWeatherSensor()], True)

async def async_setup_entry(hass: HomeAssistant, entry, async_add_entities):
    coordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_entities([OpenweatherSensor(coordinator)])
"""

#class OpenWeatherSensor(Entity):
class OpenweatherSensor(CoordinatorEntity, SensorEntity):
    _attr_name = DEFAULT_NAME
    _attr_unique_id = "openweather_forecast_sensor"

    @property
    def native_value(self):
        return self.coordinator.data.get("value")

    def __init__(self):
        self._state = None
        self._forecast = {}
        self._name = DEFAULT_NAME

    @property
    def name(self):
        return self._name

    @property
    def state(self):
        # Example: return current temperature
        return self._forecast.get("current_temp")

    @property
    def unit_of_measurement(self):
        return "°C"

    async def async_update(self):
        params = {
            "lat": CONF_LAT,
            "lon": CONF_LON,
            "appid": CONF_API_KEY,
            "units": "metric",  # or 'imperial'
        }

        async with aiohttp.ClientSession() as session:
            try:
                async with session.get(API_URL, params=params) as response:
                    if response.status != 200:
                        _LOGGER.error("Error fetching OpenWeather data: %s", response.status)
                        return
                    data = await response.json()
                    self._forecast["current_temp"] = data["current"]["temp"]
                    self._forecast["current_weather"] = data["current"]["weather"][0]["description"]
                    _LOGGER.debug("OpenWeather data fetched: %s", self._forecast)
            except Exception as e:
                _LOGGER.error("Error connecting to OpenWeather API: %s", e)
