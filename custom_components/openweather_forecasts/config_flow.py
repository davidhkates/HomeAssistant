from homeassistant import config_entries
import voluptuous as vol
from .const import DOMAIN, CONF_API_KEY, CONF_LAT, CONF_LON

class OpenWeatherConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for OpenWeather Forecasts."""

    async def async_step_user(self, user_input=None):
        if user_input is not None:
            return self.async_create_entry(
                title="OpenWeather Forecasts",
                data=user_input
            )

        schema = vol.Schema({
            vol.Required(CONF_API_KEY): str,
            vol.Required(CONF_LAT): float,
            vol.Required(CONF_LON): float,
        })

        return self.async_show_form(
            step_id="user",
            data_schema=schema
        )
