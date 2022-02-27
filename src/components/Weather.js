import React from "react";
import "./weather.css";
// import humidity from "../assests/humidity.png";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset: "./assests/sunset.png",
    sunrise: "./assests/sunrise.png",
    humidity: "./assests/humidity.png",
    wind: "./assests/wind.png",
    pressure: "./assests/pressure.png",
};


const InfoDisplay = (props) => {
  const { name, value } = props;
  return (
    <div className="info-display">
      <img src={WeatherInfoIcons[name]}/>

      <div className="data">
        <h4>{value}</h4>
        <p>{name}</p>
      </div>
    </div>
  );
};


function Weather({ weather }) {

  return (
    <div className="weather">
      
      <div className="city-name">
          <h3>{weather.name}</h3>
          <h3>|</h3>
          <h3>{weather.weather[0].description}</h3>
      </div>

    
      <div className="temp-wrapper">
          <div className="temp">
            <h1>{`${Math.floor(weather.main.temp - 273)}°C`}</h1>
            {/* <h3>{`${Math.floor(weather.main.temp_max - 273)}°C \ ${Math.floor(weather.main.temp_min - 273)}°C`}</h3> */}
            <h3>Feel Like {`${Math.floor(weather.main.feels_like - 273)}°C`}</h3>
          </div>
          <img src={WeatherIcons[weather.weather[0].icon]}/>
      </div>

      <div className="info">
        {/* <InfoDisplay name={"sunrise"} value={weather.sys.sunrise} /> */}
        <InfoDisplay name={"humidity"} value={`${weather.main.humidity} %`}/>
        <InfoDisplay name={"wind"} value={`${weather.wind.speed} m/s`} />
        <InfoDisplay name={"pressure"} value={`${weather.main.pressure} hPa`} />

      </div>
    </div>
  );
}

export default Weather;
