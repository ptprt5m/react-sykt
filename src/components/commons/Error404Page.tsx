import React, {useEffect} from 'react'
import errorImg from '../../img/homepageLinks/error.webp'
import {animeFunc} from "./anime";

const Error404Page = () => {

    useEffect(() => {
        animeFunc('.main__wrapper-item-ava')
    }, [])

    return (
        <div className="wrapper">
            <h1>Ошибка 404</h1>
            <div className="error404__wrapper">
                <img className={'main__wrapper-item-ava'} src={errorImg} alt="Страница не найдена!" />
                <span>Такой страницы нет... Проверьте, пожалуйста, адресную строку браузера!</span>
            </div>
        </div>
    )
}

export default Error404Page