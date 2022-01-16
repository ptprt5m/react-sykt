import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC, getWeatherDataTC} from "../redux/weatherReducer";
import Preloader from "./commons/Preloader";
import WeatherData, {declOfNum, windDegMaker} from '../data/weather-data'

const Weather = ({
                     temp, feelsLike, pressure, humidity, windSpeed, weatherList,
                     windDeg, getWeatherDataTC, getHourlyWeatherDataTC,
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
            {isFetching ?
                <Preloader/> :
                <div>
                    <h3>В Сыктывкаре сейчас {tempColor(temp)} {declOfNum(temp, WeatherData.temp)}, ощущается
                        как {tempColor(feelsLike)}</h3>
                    <h3>Давление <span className="secondary">{pressure}</span> мм рт. ст., влажность <span
                        className="secondary">{humidity}%</span>
                    </h3>
                    <h3>Ветер <span
                        className="secondary">{windSpeed}</span> {declOfNum(windSpeed, WeatherData.windSpeed)} в
                        секунду, дует на <span className="secondary">{windDegMaker(windDeg)}</span>
                    </h3>
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
                                    <p>{tempColor(Math.round(weatherDay.main.temp))} {declOfNum(weatherDay.main.temp, WeatherData.temp)},
                                        ощущается как {tempColor(Math.round(weatherDay.main.feels_like))}</p>
                                    <p>ветер <span className="secondary">{weatherDay.wind.speed}</span> м/с</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            <button onClick={() => {
                getHourlyWeatherDataTC()

            }}
                    className="all__button">
                Получить погоду на другие дни
            </button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        temp: state.weather.temp,
        feelsLike: state.weather.feelsLike,
        pressure: state.weather.pressure,
        humidity: state.weather.humidity,
        windSpeed: state.weather.windSpeed,
        windDeg: state.weather.windDeg,
        weatherList: state.weather.weatherList,
        isFetching: state.weather.isFetching,
        isMiniFetching: state.weather.isMiniFetching
    }
}

export default connect(mapStateToProps, {
    getWeatherDataTC,
    getHourlyWeatherDataTC
})(Weather)