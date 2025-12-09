import logging
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.core import HomeAssistant
from datetime import timedelta

_LOGGER = logging.getLogger(__name__)

class MinimalExampleCoordinator(DataUpdateCoordinator):
    """Simple coordinator returning static data."""

    def __init__(self, hass: HomeAssistant):
        super().__init__(
            hass,
            logger=_LOGGER,  # <-- use a proper logger here
            name="minimal_example_coordinator",
            update_interval=timedelta(seconds=30),
        )

    async def _async_update_data(self):
        return {"value": 42}  # sample payload
