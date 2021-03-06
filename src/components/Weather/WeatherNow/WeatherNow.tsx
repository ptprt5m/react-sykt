import React, {useEffect} from 'react'
import windIcon from '../../../img/weather/wind.png'
import {windDegMaker} from '../../../data/weather-data'
import humidityIcon from '../../../img/weather/drop.png'
import pressureIcon from '../../../img/weather/barometer.png'
import {connect} from 'react-redux'
import {getWeatherDataTC} from '../../../redux/weatherReducer'
import Preloader from '../../commons/Preloader'
import {AppStateType} from '../../../redux/redux'

type MapStatePropsType = {
    temp: number | null
    feelsLike: number | null
    pressure: number | null
    humidity: number | null
    windSpeed: number | null
    windDeg: number | null
    weatherIcon: string | null
    weatherInfo: string | null
    isFetching: boolean
}

type MapDispatchPropsType = {
    getWeatherDataTC: () => void
}

type OwnPropsType = {
    tempColor: (temp: number | null) => JSX.Element | null
    getWeatherIcon: (iconNumber: string | null) => string
    capitalizeFirstLetter: (weatherInfo: string) => string
}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const WeatherNow: React.FC<Props> = ({
                        temp, feelsLike, pressure, humidity, windSpeed, getWeatherIcon, capitalizeFirstLetter,
                        windDeg, weatherIcon, weatherInfo, tempColor, isFetching, getWeatherDataTC
                    }) => {

    useEffect(() => {
        getWeatherDataTC()
    }, [])

    return (
        <div>
            {isFetching ?
                <Preloader/>
                :
                <div className="weather__wrapper-content">
                    <div className="weather__wrapper-block">
                        <div className="weather__wrapper-block-left">
                            <p className="weather__wrapper-block_temp">{tempColor(temp)}°C</p>
                            <img className="weather__wrapper-icon" src={getWeatherIcon(weatherIcon)} alt="weatherIcon"/>
                        </div>
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
            }
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        temp: state.weather.temp,
        feelsLike: state.weather.feelsLike,
        pressure: state.weather.pressure,
        humidity: state.weather.humidity,
        windSpeed: state.weather.windSpeed,
        windDeg: state.weather.windDeg,
        weatherIcon: state.weather.weatherIcon,
        weatherInfo: state.weather.weatherInfo,
        isFetching: state.weather.isFetching
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getWeatherDataTC
})(WeatherNow)