from datetime import timedelta
import logging
import aiohttp
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .const import UPDATE_INTERVAL, CONF_API_KEY, CONF_LAT, CONF_LON

_LOGGER = logging.getLogger(__name__)

class OpenWeatherCoordinator(DataUpdateCoordinator):
    def __init__(self, hass, api_key, lat, lon):
        self.api_key = api_key
        self.lat = lat
        self.lon = lon
        self.session = aiohttp.ClientSession()

        super().__init__(
            hass,
            _LOGGER,
            name="OpenWeather Forecasts",
            update_interval=timedelta(seconds=UPDATE_INTERVAL)
        )

    async def _async_update_data(self):
        url = (
            f"https://api.openweathermap.org/data/3.0/onecall?"
            f"lat={self.lat}&lon={self.lon}&exclude=current,minutely,daily,alerts"
            f"&appid={self.api_key}&units=imperial"
        )
        try:
            async with self.session.get(url) as response:
                if response.status != 200:
                    raise UpdateFailed(f"Error fetching data: {response.status}")
                data = await response.json()
                return data["hourly"]  # return hourly forecasts
        except Exception as err:
            raise UpdateFailed(f"Error fetching OpenWeather data: {err}")
