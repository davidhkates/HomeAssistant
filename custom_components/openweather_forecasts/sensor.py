from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, SENSOR_TYPES
import logging

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up sensors from a config entry."""
    _LOGGER.debug("[sensor] async_setup_entry called")

    coordinator = hass.data[DOMAIN][entry.entry_id]

    sensors = []

    for sensor_type, sensor_info in SENSOR_TYPES.items():
        name = sensor_info["name"]
        unit = sensor_info.get("unit")

        _LOGGER.debug("Creating sensor: %s (%s)", name, sensor_type)

        sensors.append(
            OpenWeatherForecastSensor(
                coordinator=coordinator,
                entry_id=entry.entry_id,
                sensor_type=sensor_type,
                name=name,
                unit=unit,
            )
        )

    async_add_entities(sensors)
    _LOGGER.debug("[sensor] Added %s sensors", len(sensors))


class OpenWeatherForecastSensor(CoordinatorEntity, SensorEntity):
    """Sensor for OpenWeather normalized forecast data."""

    def __init__(self, coordinator, entry_id, sensor_type, name, unit):
        super().__init__(coordinator)
        self._sensor_type = sensor_type
        self._attr_name = name
        self._attr_unique_id = f"{entry_id}_{sensor_type}"
        self._attr_native_unit_of_measurement = unit

    @property
    def native_value(self):
        """Return sensor value from coordinator."""
        _LOGGER.debug("native_value called for %s; data=%s", self._sensor_type, self.coordinator.data)
        return self.coordinator.data.get(self._sensor_type)

    @property
    def extra_state_attributes(self):
        """Optional extra attributes."""
        return {
            "last_update": self.coordinator.data.get("last_update"),
            "source": "OpenWeather Forecasts",
        }

    @property
    def available(self):
        """Entity availability."""
        return self.coordinator.last_update_success
