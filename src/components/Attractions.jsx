import React from 'react'
import TopButton from "../Utils/TopButton";
import IMG_pitirimSorokin from "../img/pitirimSorokin.jpg"
import IMG_stella from "../img/stella.jpg"
import IMG_rubles from "../img/rubles.jpg"
import IMG_letterO from "../img/letterO.jpg"
import IMG_electrician from "../img/electrician.jpg"

const Attractions = () => {
    return (
        <div>
            <TopButton/>
            <div className="wrapper">
                <h1>Достопримечательности</h1>
                <div className="main__wrapper-items">
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_pitirimSorokin}/>
                        </div>
                        <h3>Памятник Питириму Сорокину</h3>
                        <p>
                            22 августа 2014 года перед входом в Сыктывкарский государственный университет открыт
                            памятник Питириму Сорокину (скульптор Андрей Ковальчук). С 2015 года Сыктывкарский
                            государственный университет носит имя Питирима Сорокина.
                        </p>
                        <span>Сыктывкар, Респ. Коми, Октябрьский проспект, 55, 167001</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_stella}/>
                        </div>
                        <h3>Монумент трудовой славы</h3>
                        <p>
                            Монумент трудовой славы воздвигнут в честь трудовых достижений трудящихся Коми АССР и
                            награждения республики орденами Ленина, Октябрьской революции и Дружбы народов (1977,
                            архитекторы А. А. Куров, П. П. Резников)
                        </p>
                        <span>ул. Коммунистическая, 33, Сыктывкар, Респ. Коми, 167001</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_rubles}/>
                        </div>
                        <h3>Памятник российскому рублю</h3>
                        <p>
                            По сообщению банка, установка «Знака Рубля» задумана для его популяризации, повышения
                            узнаваемости среди населения, а также для привлечения внимания к истории национальной валюты
                            страны.
                        </p>
                        <span>ул. Ленина, 53, Сыктывкар, Респ. Коми, 167000</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_letterO}/>
                        </div>
                        <h3>Памятник букве «o» алфавита коми</h3>
                        <p>
                            Памятник созданн скульптором Александром Выборовым и открыт в Сыктывкаре в 2011 году.
                            Автором идеи памятника выступил Алексей Рассыхаев — сотрудник Института языка, литературы и
                            истории Коми научного центра УрО РАН. По решению горожан памятник был поставлен около Центра
                            коми культуры.
                        </p>
                        <span>ул. Бабушкина, 31, Сыктывкар, Респ. Коми, 167000</span>
                    </div>
                    <div className="main__wrapper-item">
                        <div className="main__wrapper-item_img">
                            <img src={IMG_electrician}/>
                        </div>
                        <h3>Памятник электромонтеру</h3>
                        <p>
                            Инициаторами появления памятника стали сами энергетики. Таким необычным способом руководство
                            филиала МРСК Северо-Запада "Комиэнерго" (дочернее предприятие ОАО "Россети") решило отметить
                            полувековой юбилей.
                        </p>
                        <span>ул. Интернациональная, 92, Сыктывкар, Респ. Коми, 167000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Attractions
