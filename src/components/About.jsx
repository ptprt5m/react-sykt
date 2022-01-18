import React from 'react'
import river from '../img/about/sysola.jpg'
import up from '../img/about/up.jpg'
import mondi from '../img/about/mondi.jpg'
import sgu from '../img/about/sgu.jpg'
import drama from '../img/about/drama.jpg'
import LazyLoad from "react-lazyload";

const About = () => {
    return (
        <div className="wrapper">
            <h1>Подробнее о городе</h1>
            <div className="about__wrapper">
                <p className="about__wrapper-text">
                    Город основан <span className="secondary">5 февраля 1780 года</span> по Указу Екатерины II.
                    Первоначальное его название — <span className="secondary">Усть-Сысольск</span>.
                    В <span className="secondary">1930</span> году город переименован в Сыктывкар. Это название в переводе с
                    коми языка
                    означает – «город на Сысоле».
                </p>
                <div className="about__wrapper-block">
                    <LazyLoad height={400}>
                        <img className="about__wrapper-block_img" src={river} alt="river" />
                    </LazyLoad>
                    <span className="about__wrapper-block_span">Река Сысола</span>
                </div>
                <p className="about__wrapper-text">
                    Сыктывкар является административным центром Республики Коми.
                </p>
                <p className="about__wrapper-text">
                    Город расположен на северо-востоке Европейской части России в <span className="secondary">1410</span> км
                    к северо-востоку
                    от Москвы. Сыктывкар раскинулся на берегах двух рек — Сысолы и Вычегды в окружении лесов. Общая
                    площадь города составляет <span className="secondary">152</span> кв. км.
                </p>
                <div className="about__wrapper-block">
                    <LazyLoad height={400}>
                        <img className="about__wrapper-block_img" src={up} alt="up" />
                    </LazyLoad>
                    <span className="about__wrapper-block_span">Город с высоты птичьего полета</span>
                </div>
                <p className="about__wrapper-text">
                    Климат в Сыктывкаре умеренно-континентальный, с продолжительной, довольно суровой зимой и коротким,
                    сравнительно тёплым летом. Средняя температура января — <span
                    className="blue">минус 15</span> градусов С, июля — <span
                    className="red">плюс 17</span> градусов С. Осадков выпадает около <span
                    className="secondary">650</span> мм в год.
                </p>
                <p className="about__wrapper-text">
                    Сыктывкар — многонациональный город. Здесь проживает около <span className="secondary">250</span> тысяч
                    жителей – это
                    представители более <span className="secondary">70</span> национальностей. В городе действуют различные
                    национальные
                    общества.
                </p>
                <p className="about__wrapper-text">
                    Сыктывкар — большой промышленный центр. В городе работает около <span
                    className="secondary">40</span> промышленных
                    предприятий, одна треть которых имеет всероссийское значение. Среди них крупнейшее в Европе
                    предприятие по производству картонно-бумажной продукции — <span
                    className="gold">ОАО</span> «Монди Сыктывкарский ЛПК», <span
                    className="gold">ОАО</span> «Сыктывкар Тиссью Групп» — одна из ведущих российский компаний по
                    производству санитарно-гигиенической продукции, <span className="gold">ОАО</span> «Комитекс»
                    — фабрика нетканых материалов, <span className="gold">ООО</span> «Сыктывкарский фанерный
                    завод», <span className="gold">ОАО</span> «Сыктывкарский ликеро-водочный завод» — ведущий
                    производитель алкогольной продукции в республике.
                </p>
                <div className="about__wrapper-block">
                    <LazyLoad height={400}>
                        <img className="about__wrapper-block_img" src={mondi} alt="mondi" />
                    </LazyLoad>
                    <span className="about__wrapper-block_span">ОАО «Монди Сыктывкарский ЛПК»</span>
                </div>
                <p className="about__wrapper-text">
                    Кроме того, Сыктывкар – один из крупнейших научных центров на Европейском Севере России. В городе
                    насчитывается порядка <span className="secondary">30</span> специализированных учреждений,
                    осуществляющих
                    научно-исследовательские и опытно-конструкторские работы. Флагман научных учреждений Сыктывкара —
                    Коми научный центр УрО РАН, в состав которого входят: институт геологии, биологии, языка, литературы
                    и истории, физиологии, экономических и социальных проблем Севера, химии, а также отдел энергетики,
                    математики и централизованных служб. В Сыктывкаре функционирует Сыктывкарский Государственный
                    Университет <span className="secondary">им. Питирима Сорокина</span>, Коми государственный
                    педагогический институт,
                    Сыктывкарский лесной институт, Коми республиканская академия госслужбы. Работают филиалы высших
                    учебных заведений Санкт-Петербурга, Москвы, Ижевска, Кирова. Имеется Торгово-экономический колледж,
                    Коми республиканский колледж культуры имени Чисталева, Сыктывкарский медицинский колледж,
                    Сыктывкарское высшее педагогическое училище имени Куратова, Сыктывкарское высшее педагогическое
                    училище <span className="secondary">№2</span>, Республиканское училище искусств, Сыктывкарский
                    кооперативный техникум,
                    Сыктывкарский технологический колледж, Гимназия искусств при Главе Республики Коми.
                </p>
                <div className="about__wrapper-block">
                    <LazyLoad height={400}>
                        <img className="about__wrapper-block_img" src={sgu} alt="sgu" />
                    </LazyLoad>
                    <span className="about__wrapper-block_span">Сыктывкарский Государственный Университет им. Питирима Сорокина</span>
                </div>
                <p className="about__wrapper-text">
                    Сыктывкар – культурная столица республики. В городе работает Республиканский театр оперы и балета
                    Республики Коми, Национальный музыкально-драматический театр Республики Коми, Государственный
                    академический театр драмы <span className="secondary">им. В. А. Савина</span>, а также один из любимых
                    центров культуры
                    горожан — Коми Республиканская филармония. Крупнейшее государственное музейное учреждение республики
                    — Национальный музей Республики Коми. Гордостью сыктывкарцев является Национальная галерея
                    Республики Коми. Широкую известность за пределами республики имеет геологический музей <span
                    className="secondary">им. А. А. Чернова</span>.
                    Интересные экспозиции представлены в музее истории просвещения Коми края, музее археологии и
                    этнографии. В городе широко развита библиотечная сеть. Уникальный фонд печатных и рукописных
                    документов по истории, культуре и литературе Коми края представлен в Национальной библиотеке
                    Республики Коми, одной из старейших на Северо-Западе России.
                </p>
                <div className="about__wrapper-block">
                    <LazyLoad height={400}>
                        <img className="about__wrapper-block_img" src={drama} alt="drama" />
                    </LazyLoad>
                    <span className="about__wrapper-block_span">Республиканский театр оперы и балета Республики Коми</span>
                </div>
                <p className="about__wrapper-text">
                    В Сыктывкаре функционируют крупнейший в республике плавательный бассейн и Центральный стадион
                    республиканского значения.
                </p>
                <p className="about__wrapper-text">
                    Столица Коми поддерживает дружеские связи с зарубежными городами, пять из которых являются
                    городами-побратимами Сыктывкара: г. Тайюань (<span
                    className="gold">Китай, провинция Шанси</span>), г. Лос-Алтос (<span
                    className="gold">США</span>), г. Кулльера (<span className="gold">Испания</span>), г.
                    Дебрецен (<span className="gold">Венгрия</span>) и г. Ловеч (<span
                    className="gold">Болгария</span>).
                </p>
            </div>
        </div>
    )
}

export default About