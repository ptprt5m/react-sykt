import React from 'react'
import {Link} from "react-router-dom";

const HomepageLinks = () => {
    return (
        <div className={'homepageLinks__wrapper'}>
            <Link to={"/about"}>
                <div className={'homepageLinks__item'}>
                    Подробнее о городе
                </div>
            </Link>
            <Link to={"/attractions"}>
                <div className={'homepageLinks__item'}>
                    Достопримечательности
                </div>
            </Link>
            <Link to={"/stars"}>
                <div className={'homepageLinks__item'}>
                    Известные личности
                </div>
            </Link>
            <Link to={"/establishments"}>
                <div className={'homepageLinks__item'}>
                    Вкусно поесть
                </div>
            </Link>
            <Link to={"/map"}>
                <div className={'homepageLinks__item'}>
                    Карта
                </div>
            </Link>
            <Link to={"/weather"}>
                <div className={'homepageLinks__item'}>
                    Погода
                </div>
            </Link>
        </div>
    )
}

export default HomepageLinks