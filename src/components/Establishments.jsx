import React, {useEffect} from 'react'
import TopButton from "../Utils/TopButton";
import {connect} from "react-redux";
import {getInfo2GISTC, getPlacesDataTC} from "../redux/placesReducer";
import Preloader from "./commons/Preloader";

const Establishments = ({getPlacesDataTC, getInfo2GISTC, places, placeInfo, isFetching}) => {

    useEffect(() => {
        getPlacesDataTC()
    }, [])

    let getInfo2GIS = (lat, lon) => {
        getInfo2GISTC(lat, lon)
    }

    return (
        <div>
            <TopButton/>
            <div className="wrapper">
                <h1>Кафе и рестораны</h1>
                {isFetching ? <Preloader/> :
                    <div className="main__wrapper-items">
                        {places ? places.map(p => (
                            p.properties.name != '' ?
                                (<div className="main__wrapper-item" key={p.id}>
                                    <div className="main__wrapper-item-block">
                                        <h4>{p.properties.name}</h4>
                                        <a target="_blank" href={'https://www.openstreetmap.org/' + p.properties.osm}>Точка
                                            на openstreetmap</a>
                                        <button onClick={() => {
                                            getInfo2GIS(p.geometry.coordinates[1], p.geometry.coordinates[0])
                                        }}>Получить больше данных
                                        </button>


                                        {placeInfo ?
                                            <div>
                                                <p>Адрес: {placeInfo[0].address_name}</p>
                                                <p>Тип строения: {placeInfo[0].purpose_name}</p>
                                                <a target="_blank" href="/">Перейти в 2GIS</a>
                                            </div> : null}
                                        <p>Координаты: {p.geometry.coordinates[0] + ' ' + p.geometry.coordinates[1]}</p>
                                    </div>
                                </div>) : null
                        )) : null}
                    </div>
                }
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        places: state.places.places,
        placeInfo: state.places.placeInfo,
        isFetching: state.places.isFetching
    }
}

export default connect(mapStateToProps, {getPlacesDataTC, getInfo2GISTC})(Establishments)