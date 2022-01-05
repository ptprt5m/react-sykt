import React, {useEffect} from 'react'
import TopButton from "../Utils/TopButton";
import IMG_roman from "../img/roman.jpg"
import IMG_rektor from "../img/rektor.JPG"
import IMG_raisa from "../img/raisa.jpg"
import IMG_15 from "../img/15.jpg"

const Stars = () => {

    // useEffect(() => {
    //
    // }, [])

    return (
        <div>
            <TopButton/>
            <div className="wrapper">
                <h1>Известные личности</h1>
                <div className="main__wrapper-items">
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_roman}/>
                        </div>
                        <h3>Роман Аркадьевич Абрамович</h3>
                        <p>
                            Российский предприниматель, жил в городе с 1967 по 1971 год.
                        </p>
                        <span>Состояние на 2021 год - 14 700 000 000$</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_rektor}/>
                        </div>
                        <h3>Валентина Александровна Витязева</h3>
                        <p>
                            Первый ректор Сыктывкарского государственного университета, первая женщина-ректор
                            университета в СССР.
                        </p>
                        <span>Годы жизни - 07.04.1919 по 22.05.2010</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_raisa}/>
                        </div>
                        <h3>Раиса Петровна Сметанина</h3>
                        <p>
                            Четырёхкратная олимпийская чемпионка в соревнованиях по лыжным гонкам, призёр и победитель
                            всевозможных ЧМ и ЧЕ по лыжным гонкам.
                        </p>
                        <span>Конец карьеры - 1992 год</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_15}/>
                        </div>
                        <h3>Габов Николай Николаевич</h3>
                        <p>
                            Участник Великой Отечественной войны, разведчик штабной батареи 1-го гвардейского
                            артиллерийского полка 4-й гвардейской воздушно-десантной дивизии 40-й армии 2-го Украинского
                            фронта, гвардии рядовой.
                        </p>
                        <span>Награды: Герой Советского Союза, Орден Ленина, Орден Красной Звезды</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stars