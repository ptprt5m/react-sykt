import React from 'react'
import img0 from '../../../img/rest/0.png'
import {InfoPlaceType} from '../../../redux/placesReducer'

type Props = {
    key: string
    name: string
    osm: string
    coord: Array<number>
    getInfo2GIS: (lat: number, lon: number, placeInfoId: string) => void
    to2GIS: (lon: number, lat: number) => string
    placeInfo: Array<InfoPlaceType> | null
    placeInfoId: string | null
}

const Establishment: React.FC<Props> = ({key, name, osm,
                                            coord, getInfo2GIS, to2GIS,
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
                        getInfo2GIS(coord[1], coord[0], key)
                    }}>Получить больше данных
                    </button>

                    {placeInfo && placeInfoId === key ?
                        <div>
                            <p>Адрес: {placeInfo[0].address_name || 'Нет информации'}</p>
                            <p>Тип строения: {placeInfo[0].purpose_name || 'Нет информации'}</p>
                            <a target="_blank" href={to2GIS(coord[0], coord[1])}>Перейти в 2GIS</a>
                        </div> : null}
                    <p>Координаты: {coord[0] + ' ' + coord[1]}</p>
                </div>
            </div>
        </div>
    )
}

export default Establishment