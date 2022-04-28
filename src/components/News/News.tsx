import React, {useState} from 'react'

type newsType = {
    date: string
    time: string
    keys: Array<string>
    title: string
    text: string
    imageURL: string
}

type newsDataType = {
    title: string
    news: Array<newsType>
}

const newsData: newsDataType = {
    title: '29 Марта, Вторник',
    news: [
        {
            date: '18.04.2022',
            time: '16:10',
            keys: ['Общество', 'Граждане'],
            title: 'По Сыктывкару босым ходит пропавший мужчина',
            text: 'Артем Пятунин пропал 18 апреля: он нуждается в медицинской помощи и ходит по улице босой.',
            imageURL: 'https://www.bnkomi.ru/content/news/images/142982/propal1.jpg'
        },
        {
            date: '18.04.2022',
            time: '15:58',
            keys: ['Общество'],
            title: 'Задержан руководитель «Коми коммунальных технологий»',
            text: 'По данным БНК, врио гендиректора АО «Коми коммунальные технологии» Павел Назаров задержан.',
            imageURL: 'https://www.bnkomi.ru/content/news/images/142985/IMG_4776_mainPhoto_mainPhoto.jpg'
        },
        {
            date: '18.04.2022',
            time: '15:16',
            keys: ['Политика'],
            title: 'Руководитель Печорского района стал зарабатывать в два раза больше',
            text: 'А вот доход председателя совета Печоры «подрос» только на 100 тысяч рублей.',
            imageURL: 'https://www.bnkomi.ru/content/news/images/142974/BOB_2488_mainPhoto.jpg'
        },
        {
            date: '18.04.2022',
            time: '15:00',
            keys: ['Право'],
            title: 'Управляющие организации Ухты задолжали КЭСК 127 млн рублей за энергоресурсы',
            text: 'В Ухте управляющие организации не заплатили энергетикам 127 млн рублей. Из этой суммы 90,2 млн рублей приходится на электроэнергию, а 36,8 млн рублей – на тепло*.',
            imageURL: 'https://www.bnkomi.ru/content/news/images/142979/BOB_9073_mainPhoto.jpg'
        },
        {
            date: '18.04.2022',
            time: '14:33',
            keys: ['Общество'],
            title: 'Сыктывкарское общество инвалидов подало на банкротство',
            text: 'Организация должна выплатить бывшему сотруднику 173 тысячи рублей, но денег на счетах у нее нет. В Арбитражный суд Коми поступило заявление о признании несостоятельности (банкротства).',
            imageURL: 'https://www.bnkomi.ru/content/news/images/142976/BOB_1400_mainPhoto.jpg'
        }
    ]
}

const News = () => {

    const [demo, setDemo] = useState(false)

    const demoToggle = () => {
        setDemo(!demo)
    }

    return (
        <div className="wrapper">
            <h1>Новости</h1>
            <p>Портал находится в разработке!</p>
            <button onClick={demoToggle}>Как примерно будет?</button>
            {demo ? newsData.news.map(news => {
                return (
                    <div className="news__wrapper">
                        <div className={'news__wrapper-newsBlock_upper'}>
                            <h3 className={'news__wrapper-time'}>{news.time}</h3>
                            <p className={'news__wrapper-date'}>{news.date}</p>
                            <a href={'/'} className={'news__wrapper-keys'}>{news.keys.map(key => <span className={'newsKeyWords'}>{key}</span>)}</a>
                        </div>
                        <div className={'news__wrapper-newsBlock'}>
                            <p className={'news__wrapper-newsBlock_title'}>{news.title}</p>
                            <p className={'news__wrapper-newsBlock_text'}>{news.text}</p>
                            <img className={'news__wrapper-newsBlock_img'} src={news.imageURL} alt='newsImageURL'/>
                        </div>
                    </div>
                )
            }) : null}
        </div>
    )
}

export default News