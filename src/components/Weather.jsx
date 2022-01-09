import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getWeatherDataTC} from "../redux/weatherReducer";
import Preloader from "./commons/Preloader";
import WeatherData, {declOfNum, windDegMaker} from '../data/weather-data'

const Weather = ({temp, pressure, humidity, windSpeed, windDeg, getWeatherDataTC, isFetching}) => {

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

    return (
        <div className="wrapper">
            <h1>Погода</h1>
            {isFetching ?
                <Preloader/> :
                <div>
                    <h3>В сыктывкаре сейчас {tempColor(temp)} {declOfNum(temp, WeatherData.temp)}</h3>
                    <h3>Давление <span className="secondary">{pressure}</span> мм рт. ст., влажность <span
                        className="secondary">{humidity}%</span>
                    </h3>
                    <h3>Ветер <span
                        className="secondary">{windSpeed}</span> {declOfNum(windSpeed, WeatherData.windSpeed)} в
                        секунду, дует на <span className="secondary">{windDegMaker(windDeg)}</span>
                    </h3>
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        temp: state.weather.temp,
        pressure: state.weather.pressure,
        humidity: state.weather.humidity,
        windSpeed: state.weather.windSpeed,
        windDeg: state.weather.windDeg,
        isFetching: state.weather.isFetching
    }
}

export default connect(mapStateToProps, {getWeatherDataTC})(Weather)