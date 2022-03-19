import React from "react";
import Slider from "react-slick";
import windIcon from "../../../img/weather/wind.png";

const WeatherSlick = ({weatherList, getWeatherIcon, capitalizeFirstLetter, tempColor, day}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

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