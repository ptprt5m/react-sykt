import React, {useEffect} from 'react'
import {NavLink, Navigate, Route, Routes} from 'react-router-dom'
import WeatherNow from './WeatherNow'
import WeatherToday from './WeatherToday'
import WeatherTomorrow from './WeatherTomorrow'
import WeatherFiveDays from './WeatherFiveDays'

const Weather = () => {

    const redirect = () => {
        return <Navigate to="now" />;
    };

    useEffect(() => {
        redirect()
    }, [])

    let tempColor = (temp: number | null) => {
        if (temp === null) return null
        if (temp > 20) {
            return <span className={'red'}>{temp}</span>
        } else if (temp < 0) {
            return <span className={'blue'}>{temp}</span>
        } else {
            return <span className={'secondary'}>{temp}</span>
        }
        return null
    }

    let getWeatherIcon = (iconNumber: string | null) => {
        return `https://openweathermap.org/img/wn/${iconNumber}@2x.png`
    }

    function capitalizeFirstLetter(string: string) {
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

            <div className="weather__wrapper-qwe">
                <Routes>
                    <Route path='now' element={<WeatherNow tempColor={tempColor}
                                                           getWeatherIcon={getWeatherIcon}
                                                           capitalizeFirstLetter={capitalizeFirstLetter}
                    />}/>
                    <Route path='today' element={<WeatherToday tempColor={tempColor}
                                                               getWeatherIcon={getWeatherIcon}
                                                               capitalizeFirstLetter={capitalizeFirstLetter}
                    />}/>
                    <Route path='tomorrow' element={<WeatherTomorrow tempColor={tempColor}
                                                                     getWeatherIcon={getWeatherIcon}
                                                                     capitalizeFirstLetter={capitalizeFirstLetter}/>}/>
                    <Route path='fiveDays' element={<WeatherFiveDays tempColor={tempColor}
                                                                     getWeatherIcon={getWeatherIcon}
                                                                     capitalizeFirstLetter={capitalizeFirstLetter}/>}/>
                    <Route path='' element={<h3>Выбирайте время или дату выше</h3>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Weather