import React from 'react'
import HomepageLinks from '../commons/HomepageLinks'

const Homepage = () => {
    return (
        <div className="wrapper">
            <h1>Привет, друг!</h1>
            <h3>Это неофициальный сайт прекрасного города <span className={'span'}>Сыктывкар</span>, столицы <span className={'span'}>Республики Коми</span>.</h3>
            <p>Переходите по разным разделам, узнавайте новости и интересные факты!</p>
            <HomepageLinks />
        </div>
    )
}

export default Homepage