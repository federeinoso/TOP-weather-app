const name_container = document.querySelector(".city");
const country_container = document.querySelector(".country");
const description_container = document.querySelector(".status");
const temp_container = document.querySelector(".temp");
const feels_like_container = document.querySelector(".feels_life");
const temp_min_container = document.querySelector(".temp_min");
const temp_max_container = document.querySelector(".temp_max");
const humidity_container = document.querySelector(".humidity");
const input = document.querySelector("input");
import getWeatherEmoji from "./WEATHER_EMOJIS.js";

let search = "rosario";

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search = input.value;
    input.classList.remove("error");
    getWeather();
  }
});

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=4e67d944032c2ffd3d235d00bd5140ca`,
      { mode: "cors" },
    );

    const cityData = await response.json();

    const data = cityData.main;
    const status = cityData.weather[0];
    const location = cityData.sys;

    const feelsLike = Math.round(data.feels_like - 273);
    const humidity = data.humidity;
    const temp = Math.round(data.temp - 273);
    const temp_min = Math.round(data.temp_min - 273);
    const temp_max = Math.round(data.temp_max - 273);

    const description = status.description;

    const name = cityData.name;
    const country = location.country;

    name_container.textContent = name.toLowerCase() + ",";
    country_container.textContent = country.toLowerCase();
    description_container.textContent =
      description + " " + getWeatherEmoji(description);
    temp_container.textContent = temp + "ºC";
    feels_like_container.textContent = "feels like " + feelsLike + "ºC";
    temp_min_container.textContent = "temp min " + temp_min + "ºC";
    temp_max_container.textContent = "temp max " + temp_max + "ºC";
    humidity_container.textContent = "humidity " + humidity + "%";
  } catch (error) {
    input.classList.add("error");
  }
}

getWeather();
