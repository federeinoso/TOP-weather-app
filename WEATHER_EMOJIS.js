const WEATHER_EMOJIS = {
  // Clear
  "clear sky": "☀️",
  clear: "☀️",

  // Clouds
  "few clouds": "🌤️",
  "scattered clouds": "⛅",
  "broken clouds": "☁️",
  "overcast clouds": "☁️",
  clouds: "☁️",

  // Rain
  "light rain": "🌦️",
  "moderate rain": "🌧️",
  "heavy intensity rain": "🌧️",
  "very heavy rain": "⛈️",
  "extreme rain": "⛈️",
  "shower rain": "🌧️",
  rain: "🌧️",
  "light intensity drizzle": "🌦️",
  drizzle: "🌦️",

  // Thunderstorm
  thunderstorm: "⛈️",
  "thunderstorm with light rain": "⛈️",
  "thunderstorm with rain": "⛈️",
  "thunderstorm with heavy rain": "⛈️",

  // Snow
  "light snow": "🌨️",
  snow: "❄️",
  "heavy snow": "❄️",
  sleet: "🌨️",

  // Atmosphere
  mist: "🌫️",
  fog: "🌫️",
  haze: "🌫️",
  smoke: "🌫️",
  dust: "🌫️",
  sand: "🌫️",
  tornado: "🌪️",

  // Extreme
  squalls: "💨",
  windy: "💨",
};

export default function getWeatherEmoji(description) {
  const lowercaseDesc = description.toLowerCase();
  return WEATHER_EMOJIS[lowercaseDesc] || undefined;
}
