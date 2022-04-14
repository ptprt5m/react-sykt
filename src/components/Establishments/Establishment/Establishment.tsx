import React from 'react'
import img0 from '../../../img/rest/0.png'

type Props = {
    key: string
    name: string
    osm: string
    XID: string
    coord: Array<number>
    getInfoXID: (XID: string, placeInfoId: string | null) => void
    to2GIS: (lon: number, lat: number) => string
    placeInfo: any | null
    placeInfoId: string | null
}

const Establishment: React.FC<Props> = ({key, name, osm, XID,
                                            coord, getInfoXID, to2GIS,
                                            placeInfo, placeInfoId}) => {
    return (
        <div className="main__wrapper-item" key={key}>
            <div className="main__wrapper-item-block">
                <img className="main__wrapper-item-ava" src={img0} alt="restaurantPhoto"/>
                <div className="main__wrapper-item-block_right">
                    <h4>{name}</h4>
                    <a target="_blank" href={'https://www.openstreetmap.org/' + osm}>Точка
                        на openstreetmap</a>
                    <button className="all__button" onClick={() => {
                        getInfoXID(XID, key)
                    }}>Получить больше данных
                    </button>

                    {placeInfo && placeInfoId === key ?
                        <div>
                            <p>Адрес: {placeInfo.address.city || 'Нет информации'}</p>
                            <p>Тип строения: {placeInfo.address.road || 'Нет информации'}</p>
                            <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
                        </div> : null}
                    <p>Координаты: {coord[0] + ' ' + coord[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Establishment