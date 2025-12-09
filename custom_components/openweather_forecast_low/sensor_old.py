from __future__ import annotations

from homeassistant.components.sensor import (
    SensorEntity,
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import UnitOfTemperature
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DEFAULT_NAME, DOMAIN


async def async_setup_entry(hass, entry, async_add_entities):
    coordinator = hass.data[DOMAIN][entry.entry_id]
    async_add_entities([OpenWeatherMinLowTempSensor(coordinator)])


class OpenWeatherMinLowTempSensor(CoordinatorEntity, SensorEntity):
    """Sensor for minimum low temp in next 12 hours."""

    _attr_name = f"{DEFAULT_NAME} Min Low Temp"
    _attr_native_unit_of_measurement = UnitOfTemperature.CELSIUS
    _attr_device_class = SensorDeviceClass.TEMPERATURE
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_unique_id = "openweather_custom_min_low_temperature"

    @property
    def native_value(self):
        """Return numeric value or None."""
        data = self.coordinator.data
        if not data:
            return None
        val = data.get("min_low_temp")
        return val if isinstance(val, (int, float)) else None
