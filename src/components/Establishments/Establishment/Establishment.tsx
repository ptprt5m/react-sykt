import React, {useState} from 'react'
import img0 from '../../../img/rest/0.png'
import Preloader from "../../commons/Preloader";

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
}

const Establishment: React.FC<Props> = ({
                                            id, name, osm, XID,
                                            coord, getInfoXID, to2GIS,
                                            placeInfo, placeInfoId
                                        }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="main__wrapper-item" key={id}>
            <div className="main__wrapper-item-block">
                <img className="main__wrapper-item-ava" src={img0} alt="restaurantPhoto"/>
                <div className="main__wrapper-item-block_right">
                    <h4>{name}</h4>
                    <a target="_blank" href={'https://www.openstreetmap.org/' + osm}>Точка
                        на openstreetmap</a>
                    <button className="all__button" onClick={() => {
                        getInfoXID(XID, id)
                        setIsOpen(!isOpen)
                    }}>{(placeInfo && placeInfoId === id && isOpen) ? 'Скрыть' : 'Получить больше данных'}
                    </button>
                    {(placeInfo && placeInfoId === id && isOpen) ?
                        <div>
                            <p>Адрес: <span className={"primaryDark"}>{placeInfo.address.road + ', ' + placeInfo.address.house_number + ' ' + (placeInfo.address.house ? '(' + placeInfo.address.house + ')' : '') || 'Нет информации'}</span></p>
                            <p>Ссылка: {placeInfo.url ? <a href={placeInfo.url}>Сайт</a> : 'Нет информации'}</p>
                            <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Establishment