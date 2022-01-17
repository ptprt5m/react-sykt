import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC, getWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {windDegMaker} from '../../data/weather-data'
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import pressureIcon from '../../img/weather/barometer.png'
import humidityIcon from '../../img/weather/drop.png'
import windIcon from '../../img/weather/wind.png'
import Homepage from "../Homepage";
import About from "../About";
import Attractions from "../Attractions";
import Establishments from "../Establishments";
import Feedback from "../Feedback";
import Profile from "../Profile/Profile";
import Login from "../Login";
import Forgot from "../Forgot";
import SignUp from "../SignUp";
import WeatherNow from "./WeatherNow";
import WeatherToday from "./WeatherToday";

const Weather = ({
                     weatherData, temp, feelsLike, pressure, humidity, windSpeed, weatherList,
                     windDeg, getWeatherDataTC, getHourlyWeatherDataTC, weatherIcon, weatherInfo,
                     isFetching, isMiniFetching
                 }) => {

    useEffect(() => {
        getWeatherDataTC()
    }, [])

    let tempColor = (temp) => {
        if (temp > 20) {
            return <span className={'red'}>{temp}</span>
        } else if (temp < 0) {
            return <span className={'blue'}>{temp}</span>
        } else {
            return <span className={'secondary'}>{temp}</span>
        }
    }

    let getWeatherIcon = (iconNumber) => {
        return `https://openweathermap.org/img/wn/${iconNumber}@2x.png`
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="wrapper">
            <h1>Погода</h1>
            <div className="weather__wrapper-links">
                <NavLink to="/weather" className="weather__wrapper-link">Сейчас</NavLink>
                <NavLink to="/weather/today" className="weather__wrapper-link">Сегодня</NavLink>
                <NavLink to="/weather/tomorrow" className="weather__wrapper-link">Завтра</NavLink>
                <NavLink to="/weather/then" className="weather__wrapper-link">Потом</NavLink>
            </div>
            {isFetching ?
                <Preloader/> :
                <div>
                    {/*<Route exact path='/' element={<WeatherNow tempColor={tempColor} temp={temp} feelsLike={feelsLike}*/}
                    {/*                                           pressure={pressure}*/}
                    {/*                                           humidity={humidity} windSpeed={windSpeed}*/}
                    {/*                                           windDeg={windDeg}*/}
                    {/*                                           weatherIcon={weatherIcon} weatherInfo={weatherInfo}/>}/>*/}
                    {/*<Route exact path='/weather/today'*/}
                    {/*       element={<WeatherToday tempColor={tempColor} temp={temp} feelsLike={feelsLike}*/}
                    {/*                              pressure={pressure}*/}
                    {/*                              humidity={humidity} windSpeed={windSpeed} windDeg={windDeg}*/}
                    {/*                              weatherIcon={weatherIcon} weatherInfo={weatherInfo}/>}/>*/}

                    <WeatherNow tempColor={tempColor} temp={temp} feelsLike={feelsLike}
                                pressure={pressure}
                                humidity={humidity} windSpeed={windSpeed}
                                windDeg={windDeg}
                                weatherIcon={weatherIcon} weatherInfo={weatherInfo}/>
                    {/*<div className="weather__wrapper-block" >*/}
                    {/*    <p className="weather__wrapper-block_temp">{tempColor(temp)}°C</p>*/}
                    {/*    <img className="weather__wrapper-icon" src={getWeatherIcon(weatherIcon)} alt="weatherIcon"/>*/}
                    {/*    <div className="weather__wrapper-block-right">*/}
                    {/*        <p>{weatherInfo && capitalizeFirstLetter(weatherInfo)}</p>*/}
                    {/*        <p>Ощущается как {tempColor(feelsLike)}°C</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="weather__wrapper-down">*/}
                    {/*    <div className="weather__wrapper-block-wind">*/}
                    {/*        <img className="weather__wrapper-miniIcon" src={windIcon} alt="wind_icon"/>*/}
                    {/*        <p><span className="secondary">{windSpeed}</span> м/c, дует на <span className="secondary">{windDegMaker(windDeg)}</span></p>*/}
                    {/*    </div>*/}
                    {/*    <div className="weather__wrapper-block-humidity">*/}
                    {/*        <img className="weather__wrapper-miniIcon" src={humidityIcon} alt="humidity_icon"/>*/}
                    {/*        <p><span className="secondary">{humidity}%</span></p>*/}
                    {/*    </div>*/}
                    {/*    <div className="weather__wrapper-block-pressure">*/}
                    {/*        <img className="weather__wrapper-miniIcon" src={pressureIcon} alt="pressure_icon"/>*/}
                    {/*        <p><span className="secondary">{pressure}</span> мм рт. ст.</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            }
            {isMiniFetching ?
                <Preloader/> :
                <div className="main__wrapper-weather">
                    {weatherList.map(weatherDay => {
                        return (
                            <div className="main__wrapper-weather-block">
                                <img src={getWeatherIcon(weatherDay.weather[0].icon)} alt=""/>
                                <div className="main__wrapper-weather-block-right">
                                    <h3>Дата <span className="secondary">{weatherDay.dt_txt}</span></h3>
                                    <p>{capitalizeFirstLetter(weatherDay.weather[0].description)}</p>
                                    <p>{tempColor(Math.round(weatherDay.main.temp))}°C, ощущается
                                        как {tempColor(Math.round(weatherDay.main.feels_like))}°C</p>
                                    <p>Ветер <span className="secondary">{weatherDay.wind.speed}</span> м/с</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {/*<button onClick={() => getHourlyWeatherDataTC()} className="all__button">*/}
            {/*    Получить погоду на другие дни*/}
            {/*</button>*/}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        weatherData: state.weather.weatherData,
        temp: state.weather.temp,
        feelsLike: state.weather.feelsLike,
        pressure: state.weather.pressure,
        humidity: state.weather.humidity,
        windSpeed: state.weather.windSpeed,
        windDeg: state.weather.windDeg,
        weatherList: state.weather.weatherList,
        weatherIcon: state.weather.weatherIcon,
        weatherInfo: state.weather.weatherInfo,
        isFetching: state.weather.isFetching,
        isMiniFetching: state.weather.isMiniFetching
    }
}

export default connect(mapStateToProps, {
    getWeatherDataTC,
    getHourlyWeatherDataTC
})(Weather)