import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC} from "../../redux/weatherReducer";
import Preloader from "../commons/Preloader";
import {getFiveDays, getTomorrowDate} from "../../data/weather-data";
import WeatherSlick from "./WeatherSlick";

const WeatherFiveDays = ({
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
        <div className="weather__wrapper-content">
            Погода на 5 дней
            <span className='secondary'
                  style={{fontSize: '1.5em', margin: '10px 0'}}>
                Извините, функция находится в разработке</span>

            {/*<WeatherSlick getWeatherIcon={getWeatherIcon}*/}
            {/*              capitalizeFirstLetter={capitalizeFirstLetter}*/}
            {/*              tempColor={tempColor} weatherList={weatherList}*/}
            {/*              day={getFiveDays}*/}
            {/*/>*/}

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
})(WeatherFiveDays)
