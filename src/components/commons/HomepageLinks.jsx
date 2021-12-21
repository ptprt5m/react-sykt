import React from 'react'
import {Link} from "react-router-dom";

const HomepageLinks = () => {
    return (
        <div className={'homepageLinks__wrapper'}>
            <div className={'homepageLinks__item'}>
                <Link to={"/about"}>Подробнее о городе</Link>
            </div>
            <div className={'homepageLinks__item'}>
                <Link to={"/attractions"}>Достопримечательности</Link>
            </div>
            <div className={'homepageLinks__item'}>
                <Link to={"/stars"}>Известные личности</Link>
            </div>
            <div className={'homepageLinks__item'}>
                <Link to={"/establishments"}>Вкусно поесть</Link>
            </div>
            <div className={'homepageLinks__item'}>
                <Link to={"/map"}>Карта</Link>
            </div>
            <div className={'homepageLinks__item'}>
                <Link to={"/weather"}>Погода</Link>
            </div>
        </div>
    )
}

export default HomepageLinks