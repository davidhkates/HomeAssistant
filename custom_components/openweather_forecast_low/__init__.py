from __future__ import annotations
from homeassistant.core import HomeAssistant

DOMAIN = "openweather_forecast_low"

async def async_setup(hass: HomeAssistant, config: dict):
    """Set up integration via YAML (not used here)."""
    return True

async def async_setup_entry(hass: HomeAssistant, entry):
    """Set up integration via Config Flow."""
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN][entry.entry_id] = {
        "city": entry.data["city"],
        "api_key": entry.data["api_key"],
    }
    return True

async def async_unload_entry(hass: HomeAssistant, entry):
    """Unload a config entry."""
    hass.data[DOMAIN].pop(entry.entry_id, None)
    return True
