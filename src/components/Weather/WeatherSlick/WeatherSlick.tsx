import React from 'react'
import Slider from 'react-slick'
import windIcon from '../../../img/weather/wind.png'

type Props = {
    weatherList: Array<any>
    getWeatherIcon: (iconNumber: string | null) => string
    capitalizeFirstLetter: (string: string) => string
    tempColor: (temp: number | null) => JSX.Element | null
    day: () => string
}

type responsiveType = {
    breakpoint: number
    settings: {
        slidesToShow: number
        slidesToScroll: number
    }
}

type settingsType = {
    dots: boolean
    infinite: boolean
    speed: number
    slidesToShow: number
    slidesToScroll: number
    responsive: Array<responsiveType>
}

const WeatherSlick: React.FC<Props> = ({weatherList, getWeatherIcon, capitalizeFirstLetter, tempColor, day}) => {
    const settings: settingsType = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <Slider {...settings}>
                {weatherList.map(weatherDay => {
                    if (weatherDay.dt_txt.slice(0, 10) === day()) {
                        return (
                            <div className="main__wrapper-weather-block">
                                <div>
                                    <h3>{weatherDay.dt_txt.slice(11, 16)}</h3>
                                    <img src={getWeatherIcon(weatherDay.weather[0].icon)} alt="weatherIcon"/>
                                    <p className="main__wrapper-weather-block-right_info">{capitalizeFirstLetter(weatherDay.weather[0].description)}</p>
                                </div>
                                <div className="main__wrapper-weather-block-right">
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
            </Slider>
        </div>
    );
}

export default WeatherSlick