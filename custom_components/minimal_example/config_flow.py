from __future__ import annotations
from homeassistant import config_entries
from homeassistant.data_entry_flow import FlowResult
from .const import DOMAIN

class MinimalExampleConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Basic config flow with no options."""

    async def async_step_user(self, user_input=None) -> FlowResult:
        if user_input is None:
            return self.async_show_form(step_id="user", data_schema=None)

        return self.async_create_entry(title="Minimal Example", data={})