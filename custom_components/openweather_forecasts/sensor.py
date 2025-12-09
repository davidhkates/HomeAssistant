from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, SENSOR_TYPES
#from .sensor_entity import OpenWeatherForecastSensor  # if separate file
import logging

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up the sensors for this entry."""

    _LOGGER.debug("[sensor] async_setup_entry called")

    coordinator = hass.data[DOMAIN][entry.entry_id]

    sensors = []

    # Loop through the sensors you want to expose
    for sensor_type, sensor_info in SENSOR_TYPES.items():
        name = sensor_info["name"]
        unit = sensor_info.get("unit")

        _LOGGER.debug("Creating sensor: %s (%s)", name, sensor_type)

        sensor = OpenWeatherForecastSensor(
            coordinator=coordinator,
            sensor_type=sensor_type,
            name=name,
            unit=unit,
        )
        sensors.append(sensor)

    async_add_entities(sensors)
    _LOGGER.debug("[sensor] Added %s sensors", len(sensors))


class OpenWeatherForecastSensor(CoordinatorEntity, SensorEntity):
    def __init__(self, coordinator, sensor_type, name, unit):
        super().__init__(coordinator)
        self._sensor_type = sensor_type
        self._attr_name = name
        #self._attr_unique_id = f"{coordinator.entry.entry_id}_{sensor_type}"
        self._attr_native_unit_of_measurement = unit

    @property
    def native_value(self):
        _LOGGER.debug("Coordinator data: %s", self.coordinator.data)
        #return self.coordinator.data.get(self._sensor_type)
        return self.coordinator.data[0][self._sensor_type]

    @property
    def extra_state_attributes(self):
        # Optional
        attrs = {
            "last_update": self.coordinator.data.get("last_update"),
            "source": "OpenWeather Forecasts",
        }
        return attrs

    async def async_update(self):
        await self.coordinator.async_request_refresh()
