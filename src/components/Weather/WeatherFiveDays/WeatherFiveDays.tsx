import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getHourlyWeatherDataTC} from '../../../redux/weatherReducer'
import Preloader from '../../commons/Preloader'
import {AppStateType} from '../../../redux/redux'
import WeatherSlick from '../WeatherSlick/WeatherSlick'

type MapStatePropsType = {
    weatherList: any
    isFetching: boolean
}

type MapDispatchPropsType = {
    getHourlyWeatherDataTC: (dataFunc: string) => void
}

type OwnPropsType = {
    tempColor: (temp: number | null) => JSX.Element | null
    getWeatherIcon: (iconNumber: string | null) => string
    capitalizeFirstLetter: (weatherInfo: string) => string
}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const WeatherFiveDays: React.FC<Props> = ({
                                              weatherList, isFetching, getHourlyWeatherDataTC,
                                              getWeatherIcon, capitalizeFirstLetter, tempColor
                                          }) => {

    useEffect(() => {
        getHourlyWeatherDataTC('fiveDays')
    }, [])

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div>
            <WeatherSlick getWeatherIcon={getWeatherIcon}
                          capitalizeFirstLetter={capitalizeFirstLetter}
                          tempColor={tempColor} weatherList={weatherList}
                          format={'d'} count={2}
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
})(WeatherFiveDays)
