import React, { useState } from 'react';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState(''); 
  const [weather, setWeather] = useState({
    main: { temp: 16, humidity: 91 },
    wind: { speed: 3.6 },
    name: "Delhi"
  }); 

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d67177eebb1108b4c592f28e656e8295&units=metric`
      );
      const data = await response.json();
      setWeather(data); 
      console.log(data); 
    } catch (error) {
      console.log('Error fetching weather data', error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={city}
          onChange={handleCityChange}
        />
        <img
          src="https://img.icons8.com/?size=100&id=XU3XKgdpT0qG&format=png&color=000000"
          alt="Search Icon"
          onClick={handleClick}
        />
      </div>

      {}
      <div className="weather-display">
        <img
          src="https://t4.ftcdn.net/jpg/02/76/64/59/360_F_276645930_rz1Ip1QQEywflmc5IkwJwzN0doV4aEeH.jpg"
          alt="Weather Icon"
          className="weather-icon"
        />
        <p className="temperature">{weather.main.temp}°C</p>
        <p className="location">{weather.name}</p>

        <div className="weather-info">
          <div className="weather-temp-loc">
            <div className="humidity-info">
              <img
                src="https://static-00.iconduck.com/assets.00/humidity-icon-1024x838-vqbjj1sp.png"
                alt="Humidity Icon"
                className="humidity-icon"
              />
              <p className="humidity-temp">{weather.main.humidity}%</p>
              <p className="humidity-loc">Humidity</p>
            </div>

            <div className="wind-info">
              <img
                src="https://w7.pngwing.com/pngs/676/835/png-transparent-wind-speed-weather-forecasting-wind-text-number-anemometer-thumbnail.png"
                alt="Wind Speed Icon"
                className="wind-icon"
              />
              <p className="wind-temp">{weather.wind.speed} km/h</p>
              <p className="wind-loc">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
