from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from .const import DOMAIN
from .coordinator import OpenWeatherCoordinator

import logging
_LOGGER = logging.getLogger(__name__)

PLATFORMS = ["sensor"]

async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Debug sensor instantiation"""
    _LOGGER.debug("Setting up OpenWeatherForecasts entry %s", entry.entry_id)

    """Set up the integration from a config entry."""
    api_key = entry.data["api_key"]
    lat = entry.data["latitude"]
    lon = entry.data["longitude"]

    coordinator = OpenWeatherCoordinator(hass, api_key, lat, lon)
    await coordinator.async_config_entry_first_refresh()

    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = coordinator
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)

    return True

async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry):
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)

    if unload_ok:
        # Remove coordinator from memory
        hass.data[DOMAIN].pop(entry.entry_id)

    return unload_ok
