import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {
    getInfo2GISTC,
    getPlacesDataTC,
    setNewPlacesTC,
    setPageSize
} from "../redux/placesReducer";
import Preloader from "./commons/Preloader";
import restaurant from "../img/restaurant.png"

const Establishments = ({getPlacesDataTC, setNewPlacesTC, getInfo2GISTC,
                            places, placeInfo, isFetching, pageSize,
                            totalPlacesCount, setPageSize, isMiniFetching,
                            setTotalPlacesCountTC}) => {

    useEffect(() => {
        getPlacesDataTC(pageSize)
    }, [])

    useEffect(() => {
        setNewPlacesTC(pageSize)
    }, [pageSize])

    let getInfo2GIS = (lat, lon) => {
        getInfo2GISTC(lat, lon)
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
                                    <img className="main__wrapper-item-ava" src={restaurant} alt="restaurantPhoto"/>
                                    <div className="main__wrapper-item-block_right">
                                        <h4>{p.properties.name}</h4>
                                        <a target="_blank" href={'https://www.openstreetmap.org/' + p.properties.osm}>Точка
                                            на openstreetmap</a>
                                        <button className="places__button" onClick={() => {
                                            getInfo2GIS(p.geometry.coordinates[1], p.geometry.coordinates[0])
                                        }}>Получить больше данных
                                        </button>

                                        {placeInfo ?
                                            <div>
                                                <p>Адрес: {placeInfo[0].address_name || 'Нет информации'}</p>
                                                <p>Тип строения: {placeInfo[0].purpose_name || 'Нет информации'}</p>
                                                <a target="_blank" href="/">Перейти в 2GIS</a>
                                            </div> : null}
                                        <p>Координаты: {p.geometry.coordinates[0] + ' ' + p.geometry.coordinates[1]}</p>
                                    </div>
                                </div>
                            </div>) : null
                    )) : null}
                </div>
            }
            {isMiniFetching ? <Preloader /> : null}
            <button className="places__button places__button-download"
                    onClick={() => {
                        debugger
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

let mapStateToProps = (state) => {
    return {
        places: state.places.places,
        placeInfo: state.places.placeInfo,
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