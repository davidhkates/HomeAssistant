import requests

def get_min_low_temp(api_key, lat, lon):
    """Return the minimum forecast low temperature from the next 12 periods."""

    #url = "https://api.openweathermap.org/data/2.5/forecast"
    url = "https://api.openweathermap.org/data/3.0/onecall"
    params = {
        "lat": lat,
        "lon": lon,
        "units": "imperial",
        "exclue": "current,minutely,daily,alerts"
        "appid": api_key
    }

    response = requests.get(url, params=params)
    data = response.json()

    # Extract the next 12 forecast entries (each = 3 hours apart)
    forecasts = data.get("list", [])[:12]

    lows = []

    for f in forecasts:
        main = f.get("main", {})
        temp_min = main.get("temp_min")
        if temp_min is not None:
            lows.append(temp_min)

    if not lows:
        raise ValueError("No forecast data found")

    return min(lows)
