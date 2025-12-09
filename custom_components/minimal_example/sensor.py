from __future__ import annotations
from homeassistant.components.sensor import SensorEntity
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, DEFAULT_NAME

async def async_setup_entry(hass: HomeAssistant, entry, async_add_entities):
    coordinator = hass.data[DOMAIN][entry.entry_id]

    async_add_entities([MinimalExampleSensor(coordinator)])


class MinimalExampleSensor(CoordinatorEntity, SensorEntity):
    _attr_name = DEFAULT_NAME
    _attr_unique_id = "minimal_example_sensor"

    @property
    def native_value(self):
        return self.coordinator.data.get("value")