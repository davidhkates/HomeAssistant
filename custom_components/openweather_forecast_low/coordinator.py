from __future__ import annotations

import aiohttp
import async_timeout
import logging
from datetime import timedelta

from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.core import HomeAssistant

_LOGGER = logging.getLogger(__name__)

UPDATE_INTERVAL = timedelta(minutes=10)


class OpenWeatherCoordinator(DataUpdateCoordinator):
    """Coordinator to fetch OpenWeather data."""

    def __init__(self, hass: HomeAssistant, api_key: str, lat: float, lon: float):
        self.api_key = api_key
        self.lat = lat
        self.lon = lon
        self.session = aiohttp.ClientSession()

        super().__init__(
            hass,
            _LOGGER,
            name="OpenWeather Forecast Low Coordinator",
            update_interval=UPDATE_INTERVAL,
        )

    async def _async_update_data(self):
        """Fetch & process hourly forecast."""

        url = (
            f"https://api.openweathermap.org/data/3.0/onecall?"
            f"lat={self.lat}&lon={self.lon}&appid={self.api_key}"
            f"&units=metric&exclude=current,minutely,daily,alerts"
        )

        _LOGGER.debug("Requesting hourly forecast: %s", url)

        try:
            async with async_timeout.timeout(10):
                async with self.session.get(url) as resp:
                    raw = await resp.json()

            hours = raw.get("hourly", [])[:12]

            lows = [h.get("temp") for h in hours if h.get("temp") is not None]

            if not lows:
                _LOGGER.warning("No hourly temperature data in API response.")
                return {"min_low_temp": None}

            min_temp = min(lows)

            _LOGGER.debug("Minimum low temp from next 12 hours: %s°C", min_temp)

            return {"min_low_temp": min_temp}

        except Exception as e:
            _LOGGER.error("Error fetching or processing OpenWeather data: %s", e)
            return {"min_low_temp": None}
