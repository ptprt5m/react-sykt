import React from 'react'
import '../../styles/burger.scss'
import {NavLink} from 'react-router-dom'

type Props = {
    isAuth: boolean
    userLogout: () => void
}

const Header: React.FC<Props> = ({isAuth, userLogout}) => {
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
                                <li><NavLink to="/leisure">Досуг</NavLink></li>
                                <li><NavLink to="/map">Карта</NavLink></li>
                                <li><NavLink to="/weather/now">Погода</NavLink></li>
                                <li><NavLink to="/news">Новости</NavLink></li>
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

                <input id="menu-toggle" type="checkbox"/>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/feedback">Обратная связь</NavLink></li>
                    {isAuth ?
                        <li><NavLink to="/profile">Профиль</NavLink></li>
                        : null
                    }
                    {isAuth ?
                        <li><NavLink to="/" onClick={userLogout}>Выйти</NavLink></li>
                        : <li><NavLink to="/login">Войти</NavLink></li>
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header
