import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {getTomorrowDate} from "../../data/weather-data";
import windIcon from "../../img/weather/wind.png";

const WeatherTomorrow = ({
                             weatherList, isFetching, getHourlyWeatherDataTC,
                             getWeatherIcon, capitalizeFirstLetter, tempColor
                         }) => {

    useEffect(() => {
        getHourlyWeatherDataTC()
    }, [])

    return (
        <div>
            {isFetching ?
                <Preloader/> :
                <div className="weather__wrapper-content">
                    <div className="main__wrapper-weather">
                        {weatherList.map(weatherDay => {
                            if (weatherDay.dt_txt.slice(0, 10) === getTomorrowDate()) {
                                return (
                                    <div className="main__wrapper-weather-block">
                                        <h3><span className="secondary">{weatherDay.dt_txt.slice(11, 16)}</span></h3>
                                        <img src={getWeatherIcon(weatherDay.weather[0].icon)} alt=""/>
                                        <div className="main__wrapper-weather-block-right">
                                            <p>{capitalizeFirstLetter(weatherDay.weather[0].description)}</p>
                                            <p className="main__wrapper-weather-block-right_temp">{tempColor(Math.round(weatherDay.main.temp))}°C</p>
                                            <p className="main__wrapper-weather-block-right_wind">
                                                <img className="main__wrapper-weather-block-right_miniIcon"
                                                     src={windIcon} alt="wind_icon"/>
                                                <span className="secondary"
                                                      style={{marginRight: '5px'}}>{weatherDay.wind.speed}</span> м/с
                                            </p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        weatherList: state.weather.weatherList,
        isFetching: state.weather.isFetching
    }
}

export default connect(mapStateToProps, {
    getHourlyWeatherDataTC
})(WeatherTomorrow)
