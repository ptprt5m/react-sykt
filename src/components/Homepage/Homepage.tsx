import React from 'react'
import HomepageLinks from '../commons/HomepageLinks'
import mainVideo from '../../img/mainVideo.mp4'

const Homepage = () => {
    return (
        <div className='homepage__wrapper'>
            <div className="main-video">
                    <video playsInline autoPlay muted loop src={mainVideo} />
                </div>
            <div className="homepage wrapper">
                <h1 className='homepage-title'>Привет, друг!</h1>
                <h3 className='homepage-subtitle'>Это неофициальный сайт прекрасного города <span className={'span'}>Сыктывкар</span>, столицы <span className={'span'}>Республики Коми</span>.</h3>
                <p className='homepage-desc'>Переходите по разным разделам, узнавайте новости и интересные факты!</p>
                {/* <HomepageLinks /> */}
            </div>
        </div>
    )
}

export default Homepage