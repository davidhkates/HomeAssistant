DOMAIN = "openweather_forecasts"

CONF_API_KEY = "api_key"
CONF_LAT = "latitude"
CONF_LON = "longitude"

DEFAULT_NAME = "OpenWeather Forecasts"
UPDATE_INTERVAL = 3600  # seconds

SENSOR_TYPES = {
    "temp": {
        "name": "Temperature",
        "unit": "°F",
    },
    "feels_like": {
        "name": "Feels Like",
        "unit": "°F",
    },
    "humidity": {
        "name": "Humidity",
        "unit": "%",
    }
}
