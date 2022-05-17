import React from 'react'
import {Link} from "react-router-dom";
import about from '../../img/homepageLinks/city.webp'
import attractions from '../../img/homepageLinks/eiffel-tower.webp'
import celebrity from '../../img/homepageLinks/celebrity.webp'
import establishments from '../../img/homepageLinks/delicious.webp'
import map from '../../img/homepageLinks/navigation.webp'
import weather from '../../img/homepageLinks/rain.webp'
import news from '../../img/homepageLinks/news.webp'
import stage from '../../img/homepageLinks/stage.webp'

const HomepageLinks = () => {
    return (
        <div className='homepageLinks__wrapper'>
            <Link to={"/about"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={about} alt="about"/>
                    <p className='homepageLinks__wrapper-item_title'>Подробнее о городе</p>
                </div>
            </Link>
            <Link to={"/attractions"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={attractions} alt="attractions"/>
                    <p className='homepageLinks__wrapper-item_title'>Достопримечательности</p>
                </div>
            </Link>
            <Link to={"/stars"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={celebrity} alt="stars"/>
                    <p className='homepageLinks__wrapper-item_title'>Известные личности</p>
                </div>
            </Link>
            <Link to={"/establishments"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={establishments} alt="establishments"/>
                    <p className='homepageLinks__wrapper-item_title'>Вкусно поесть</p>
                </div>
            </Link>
            <Link to={"/map"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={map} alt="map"/>
                    <p className='homepageLinks__wrapper-item_title'>Карта</p>
                </div>
            </Link>
            <Link to={"/weather/now"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={weather} alt="weather"/>
                    <p className='homepageLinks__wrapper-item_title'>Погода</p>
                </div>
            </Link>
            <Link to={"/news"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={news} alt="news"/>
                    <p className='homepageLinks__wrapper-item_title'>Новости</p>
                </div>
            </Link>
            <Link to={"/leisure"}>
                <div className='homepageLinks__wrapper-item'>
                    <img className='homepageLinks__wrapper-item_icon' src={stage} alt="leisure"/>
                    <p className='homepageLinks__wrapper-item_title'>Досуг</p>
                </div>
            </Link>
        </div>
    )
}

export default HomepageLinks