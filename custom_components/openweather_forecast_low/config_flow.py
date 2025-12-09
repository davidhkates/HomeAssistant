from __future__ import annotations

import voluptuous as vol
from homeassistant import config_entries
from homeassistant.const import CONF_API_KEY, CONF_LATITUDE, CONF_LONGITUDE

from .const import DOMAIN


class OpenWeatherForecastLowConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for OpenWeather Forecast Low."""

    VERSION = 1

    async def async_step_user(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(
                title="OpenWeather Forecast Low",
                data=user_input,
            )

        schema = vol.Schema(
            {
                vol.Required(CONF_API_KEY): str,
                vol.Required(CONF_LATITUDE, default=self.hass.config.latitude): float,
                vol.Required(CONF_LONGITUDE, default=self.hass.config.longitude): float,
            }
        )

        return self.async_show_form(step_id="user", data_schema=schema)
