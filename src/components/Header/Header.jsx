import React from 'react'
import {NavLink} from "react-router-dom";

const Header = ({isAuth, userLogout}) => {
    return (
        <header className="header">
            <div className="header__section-left">
                <div className="header__item header__logo">
                    <NavLink to="/">Сыктывкар</NavLink>
                </div>
            </div>
            <div className="header__section-right">
                <nav role="navigation">
                    <ul>
                        <li><NavLink to="/feedback">Обратная связь</NavLink></li>
                        <li>
                            <NavLink to="/about">Подробнее о городе</NavLink>
                            <ul className="dropdown" aria-label="submenu">
                                <li><NavLink to="/attractions">Достопримечательности</NavLink></li>
                                <li><NavLink to="/stars">Известные личности</NavLink></li>
                                <li><NavLink to="/establishments">Вкусно поесть</NavLink></li>
                                <li><NavLink to="/map">Карта</NavLink></li>
                                <li><NavLink to="/weather/now">Погода</NavLink></li>
                                <li><NavLink to="/about">О городе</NavLink></li>
                            </ul>
                        </li>
                        {isAuth ?
                            <li><NavLink to="/profile">Профиль</NavLink></li>
                            : null
                        }
                        {isAuth ?
                            <li><NavLink to="/" onClick={userLogout}>Выйти</NavLink></li>
                            : <li><NavLink to="/login">Войти</NavLink></li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
