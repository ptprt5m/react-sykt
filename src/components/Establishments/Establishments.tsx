import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
    getInfo2GISTC,
    getPlacesDataTC, PlaceType, InfoPlaceType,
    setNewPlacesTC,
    setPageSize
} from '../../redux/placesReducer'
import Preloader from '../commons/Preloader'
import img0 from '../../img/rest/0.png'
import {AppStateType} from "../../redux/redux";

type MapStatePropsType = {
    places: Array<PlaceType> | null
    placeInfo: Array<InfoPlaceType> | null
    placeInfoId: string | null
    isFetching: boolean
    isMiniFetching: boolean
    pageSize: number
    totalPlacesCount: number
}

type MapDispatchPropsType = {
    getPlacesDataTC: (pageSize: number) => void
    setNewPlacesTC: (pageSize: number) => void
    getInfo2GISTC: (lat: number, lon: number, placeInfoId: string) => void
    setPageSize: (pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Establishments: React.FC<PropsType> = ({getPlacesDataTC, setNewPlacesTC, getInfo2GISTC,
                            places, placeInfo, placeInfoId, isFetching, pageSize,
                            totalPlacesCount, setPageSize, isMiniFetching}) => {

    useEffect(() => {
        getPlacesDataTC(pageSize)
    }, [])

    useEffect(() => {
        setNewPlacesTC(pageSize)
    }, [pageSize])

    let getInfo2GIS = (lat: number, lon: number, placeInfoId: string) => {
        getInfo2GISTC(lat, lon, placeInfoId)
    }

    let to2GIS = (lon: number, lat: number) => {
        return `https://2gis.ru/syktyvkar/geo/${lon},${lat}?m=${lon},${lat}/17.52`
    }

    return (
        <div className="wrapper">
            <h1>Кафе и рестораны</h1>
            {isFetching ? <Preloader/> :
                <div className="main__wrapper-items">
                    {places ? places.map(p => (
                        p.properties.name != '' ?
                            (<div className="main__wrapper-item" key={p.id}>
                                <div className="main__wrapper-item-block">
                                    <img className="main__wrapper-item-ava" src={img0} alt="restaurantPhoto"/>
                                    <div className="main__wrapper-item-block_right">
                                        <h4>{p.properties.name}</h4>
                                        <a target="_blank" href={'https://www.openstreetmap.org/' + p.properties.osm}>Точка
                                            на openstreetmap</a>
                                        <button className="all__button" onClick={() => {
                                            getInfo2GIS(p.geometry.coordinates[1], p.geometry.coordinates[0], p.id)
                                        }}>Получить больше данных
                                        </button>

                                        {placeInfo && placeInfoId === p.id ?
                                            <div>
                                                <p>Адрес: {placeInfo[0].address_name || 'Нет информации'}</p>
                                                <p>Тип строения: {placeInfo[0].purpose_name || 'Нет информации'}</p>
                                                <a target="_blank" href={to2GIS(p.geometry.coordinates[0], p.geometry.coordinates[1])}>Перейти в 2GIS</a>
                                            </div> : null}
                                        <p>Координаты: {p.geometry.coordinates[0] + ' ' + p.geometry.coordinates[1]}</p>
                                    </div>
                                </div>
                            </div>) : null
                    )) : null}
                </div>
            }
            {isMiniFetching ? <Preloader /> : null}
            <button className="all__button all__button-download"
                    onClick={() => {
                        if (pageSize <= totalPlacesCount) {
                            setPageSize(pageSize)
                        } else {
                            alert('Загружено максимальное кол-во данных')
                        }
                    }}
            >Загрузить еще</button>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        places: state.places.places,
        placeInfo: state.places.placeInfo,
        placeInfoId: state.places.placeInfoId,
        isFetching: state.places.isFetching,
        isMiniFetching: state.places.isMiniFetching,
        pageSize: state.places.pageSize,
        totalPlacesCount: state.places.totalPlacesCount
    }
}

export default connect(mapStateToProps, {
    getPlacesDataTC,
    setNewPlacesTC,
    getInfo2GISTC,
    setPageSize
})(Establishments)