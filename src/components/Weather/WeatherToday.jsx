import React from 'react'
import windIcon from "../../img/weather/wind.png";
import {windDegMaker} from "../../data/weather-data";
import humidityIcon from "../../img/weather/drop.png";
import pressureIcon from "../../img/weather/barometer.png";

const WeatherToday = ({
                        temp, feelsLike, pressure, humidity, windSpeed,
                        windDeg, weatherIcon, weatherInfo, tempColor
                    }) => {


    let getWeatherIcon = (iconNumber) => {
        return `https://openweathermap.org/img/wn/${iconNumber}@2x.png`
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="weather__wrapper-content">
            <div className="weather__wrapper-block">
                <p className="weather__wrapper-block_temp">{tempColor(temp)}°C</p>
                <img className="weather__wrapper-icon" src={getWeatherIcon(weatherIcon)} alt="weatherIcon"/>
                <div className="weather__wrapper-block-right">
                    <p>{weatherInfo && capitalizeFirstLetter(weatherInfo)}</p>
                    <p>Ощущается как {tempColor(feelsLike)}°C</p>
                </div>
            </div>
            <div className="weather__wrapper-down">
                <div className="weather__wrapper-block-wind">
                    <img className="weather__wrapper-miniIcon" src={windIcon} alt="wind_icon"/>
                    <p><span className="secondary">{windSpeed}</span> м/c, дует на <span
                        className="secondary">{windDegMaker(windDeg)}</span></p>
                </div>
                <div className="weather__wrapper-block-humidity">
                    <img className="weather__wrapper-miniIcon" src={humidityIcon} alt="humidity_icon"/>
                    <p><span className="secondary">{humidity}%</span></p>
                </div>
                <div className="weather__wrapper-block-pressure">
                    <img className="weather__wrapper-miniIcon" src={pressureIcon} alt="pressure_icon"/>
                    <p><span className="secondary">{pressure}</span> мм рт. ст.</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherToday