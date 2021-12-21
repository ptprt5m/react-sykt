import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getWeatherDataTC} from "../redux/weatherReducer";
import Preloader from "./commons/Preloader";

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
            return <span className={'purple'}>{temp}</span>
        }
    }

    let windDegMaker = (windDeg) => {
        if (0 < windDeg < 90) {
            return 'северо-восток'
        } else if (91 < windDeg < 180) {
            return 'юго-восток'
        } else if (181 < windDeg < 270) {
            return 'юго-запад'
        } else if (271 < windDeg < 360) {
            return 'северо-запад'
        } else {
            return 'все четыре стороны :)'
        }
    }

    return (
        <div>
            <div className="wrapper">
                <h1>Погода</h1>
                {isFetching ?
                    <Preloader /> :
                    <div>
                        <h3>В сыктывкаре сейчас {tempColor(temp)} градусов</h3>
                        <h3>Давление <span className="purple">{pressure}</span> мм рт. ст., влажность <span className="purple">{humidity}%</span></h3>
                        <h3>Ветер <span className="purple">{windSpeed}</span> метров в секунду, дует на <span className="purple">{windDegMaker(windDeg)}</span></h3>
                    </div>
                }
            </div>
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