from datetime import timedelta, datetime
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

                raw = await response.json()
                hourly = raw.get("hourly", [])

                if not hourly:
                    raise UpdateFailed("No hourly forecast returned")

                # ----- Normalize Data -----

                # Current hour forecast (next hour)
                now = hourly[0]

                temperature = now.get("temp")
                feels_like = now.get("feels_like")
                humidity = now.get("humidity")

                # Overnight high/low example (from next 12 hours)
                next_12 = hourly[:12]
                overnight_low = min(h.get("temp") for h in next_12)
                overnight_high = max(h.get("temp") for h in next_12)

                return {
                    "temperature": temperature,
                    "feels_like": feels_like,
                    "humidity": humidity,
                    "overnight_low": overnight_low,
                    "overnight_high": overnight_high,
                    "last_update": datetime.utcnow().isoformat(),
                }

        except Exception as err:
            raise UpdateFailed(f"Error fetching OpenWeather data: {err}")


"""
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
"""
