import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC, getWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {NavLink} from "react-router-dom";
import WeatherNow from "./WeatherNow";
import {Route, Routes} from "react-router";
import WeatherToday from "./WeatherToday";
import WeatherTomorrow from "./WeatherTomorrow";
import WeatherFiveDays from "./WeatherFiveDays";

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
                <NavLink to="now" className="weather__wrapper-link">Сейчас</NavLink>
                <NavLink to="today" className="weather__wrapper-link">Сегодня</NavLink>
                <NavLink to="tomorrow" className="weather__wrapper-link">Завтра</NavLink>
                <NavLink to="fiveDays" className="weather__wrapper-link">5 дней</NavLink>
            </div>
            {isFetching ?
                <Preloader/> :
                <div className="weather__wrapper-qwe">
                    <Routes>
                        <Route exact path='now' element={<WeatherNow tempColor={tempColor} temp={temp} feelsLike={feelsLike}
                                                                   pressure={pressure}
                                                                   humidity={humidity} windSpeed={windSpeed}
                                                                   windDeg={windDeg}
                                                                   weatherIcon={weatherIcon} weatherInfo={weatherInfo}/>}/>
                        <Route exact path='today' element={<WeatherToday />}/>
                        <Route exact path='tomorrow' element={<WeatherTomorrow />}/>
                        <Route exact path='fiveDays' element={<WeatherFiveDays />}/>
                    </Routes>




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