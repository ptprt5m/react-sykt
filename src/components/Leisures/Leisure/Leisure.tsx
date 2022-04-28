import React, {useState} from 'react'
import cinema from '../../../img/homepageLinks/cinema.png'
import Preloader from '../../commons/Preloader'
import Img from "../../commons/Img";

type Props = {
    key?: string
    id: string
    name: string
    osm: string
    XID: string
    coord: Array<number>
    getInfoXID: (XID: string, placeInfoId: string | null) => void
    to2GIS: (lon: number, lat: number) => string
    placeInfo: any | null
    placeInfoId: string | null
    isXidFetching: boolean
}

const Leisure: React.FC<Props> = ({
                                      id, name, osm, XID,
                                      coord, getInfoXID, to2GIS,
                                      placeInfo, placeInfoId, isXidFetching
                                  }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="leisure" key={id}>
            <div className="leisure__wrapper">
                <img className="leisure__wrapper-ava" src={cinema} alt="restaurantPhoto"/>
                <div className="leisure__wrapper-block">
                    <h4>{name}</h4>
                    <a target="_blank" href={'https://www.openstreetmap.org/' + osm}>Точка
                        на openstreetmap</a>
                    <button className="all__button"
                            disabled={isXidFetching}
                            onClick={() => {
                                if (!isOpen) {
                                    getInfoXID(XID, id)
                                }
                                setIsOpen(!isOpen)
                            }}>{(placeInfo && placeInfoId === id && isOpen) ? 'Скрыть' : 'Получить больше данных'}
                    </button>
                    {isXidFetching && isOpen ? <Preloader/> :
                        (placeInfo && placeInfoId === id && isOpen) ?
                            <div>
                                <p>Фото: {(placeInfo.preview) ?
                                    <Img path={placeInfo.preview.source}
                                         nameClass={'leisure__wrapper-block-photo'}/> : 'Нет информации'} </p>
                                <p>Адрес: <span
                                    className={"primaryDark"}>{(placeInfo.address.road ? placeInfo.address.road : '(*Название улицы недоступно)') + ', ' + (placeInfo.address.house_number ? placeInfo.address.house_number : '(*Номер дома недоступен)') + ' ' + (placeInfo.address.house ? '(' + placeInfo.address.house + ')' : '') || 'Нет информации'}</span>
                                </p>
                                <p>Ссылка: {placeInfo.url ? <a href={placeInfo.url}>Сайт</a> : 'Нет информации'}</p>
                                {(placeInfo.info) ? placeInfo.info.descr : null}
                                <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
                            </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Leisure