import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
// import i01d from "/assests/icons/sunny.svg"
// import i01n from "/assests/icons/night.svg"
// import i02d from "/assests/icons/day.svg"
// import i02n from "/assests/icons/cloudy-night.svg"
// import i03d from "/assests/icons/cloudy.svg"
// import i03n from "/assests/icons/cloudy.svg"
// import i04d from "/assests/icons/perfect-day.svg"
// import i04n from "/assests/icons/cloudy-night.svg"
// import i09d from "/assests/icons/rain.svg"
// import i09n from "/assests/icons/rain-night.svg"
// import i10d from "/assests/icons/rain.svg"
// import i10n from "/assests/icons/rain-night.svg"
// import i11d from "/assests/icons/storm.svg"
// import i11n from "/assests/icons/storm.svg"
// import i50d from ""
// import i50n from "/assests/icons/storm.svg"
export const WeatherIcons = {
  "01d": "/assests/icons/sunny.svg",
  "01n": "/assests/icons/night.svg",
  "02d": "/assests/icons/day.svg",
  "02n": "/assests/icons/cloudy-night.svg",
  "03d": "/assests/icons/cloudy.svg",
  "03n": "/assests/icons/cloudy.svg",
  "04d": "/assests/icons/perfect-day.svg",
  "04n": "/assests/icons/cloudy-night.svg",
  "09d": "/assests/icons/rain.svg",
  "09n": "/assests/icons/rain-night.svg",
  "10d": "/assests/icons/rain.svg",
  "10n": "/assests/icons/rain-night.svg",
  "11d": "/assests/icons/storm.svg",
  "11n": "/assests/icons/storm.svg",
  "50d": "https://img.icons8.com/color/48/000000/summer--v2.png",
  "50n": "/assests/icons/storm.svg",

};



function App() {
  const [weather, setWeather] = useState("");

  const toggleDisplay = (c) => {
    console.log("button");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=%process.env.key%`
    )
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Failed to fetch weather");
      })

      .then((data) => setWeather(data))
      .catch((err) => {
        console.log(err.message);
        setWeather(null);
      });
  };
  return (
    <div className="App">
      <Search toggleDisplay={toggleDisplay} />
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
