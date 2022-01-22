import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {getTodayDate} from "../../data/weather-data";
import WeatherSlick from "./WeatherSlick";

const WeatherToday = ({
                          weatherList, isFetching, getHourlyWeatherDataTC,
                          getWeatherIcon, capitalizeFirstLetter, tempColor
                      }) => {

    useEffect(() => {
        getHourlyWeatherDataTC()
    }, [])

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div>
            <WeatherSlick getWeatherIcon={getWeatherIcon}
                          capitalizeFirstLetter={capitalizeFirstLetter}
                          tempColor={tempColor} weatherList={weatherList}
                          day={getTodayDate}
            />
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
})(WeatherToday)
