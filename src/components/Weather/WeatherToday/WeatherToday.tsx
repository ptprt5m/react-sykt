import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {getHourlyWeatherDataTC} from "../../../redux/weatherReducer";
import Preloader from "../../commons/Preloader";
import {getTodayDate} from "../../../data/weather-data";
import WeatherSlick from "../WeatherSlick/WeatherSlick";
import {AppStateType} from "../../../redux/redux";

type MapStatePropsType = {
    weatherList: any
    isFetching: boolean
}

type MapDispatchPropsType = {
    getHourlyWeatherDataTC: () => void
}

type OwnPropsType = {
    tempColor: (temp: number | null) => JSX.Element | null
    getWeatherIcon: (iconNumber: string) => string
    capitalizeFirstLetter: (weatherInfo: string) => string
}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const WeatherToday: React.FC<Props> = ({
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

let mapStateToProps = (state: AppStateType) => {
    return {
        weatherList: state.weather.weatherList,
        isFetching: state.weather.isFetching
    }
}

export default connect(mapStateToProps, {
    getHourlyWeatherDataTC
})(WeatherToday)
