import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {getTomorrowDate} from "../../data/weather-data";
import WeatherSlick from "./WeatherSlick";

const WeatherTomorrow = ({
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
                          day={getTomorrowDate}
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
})(WeatherTomorrow)
