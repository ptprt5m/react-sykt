import React, {useEffect} from 'react'
import TopButton from "../Utils/TopButton";
import {connect} from "react-redux";
import {getPlacesDataTC} from "../redux/placesReducer";
import Preloader from "./commons/Preloader";

const Establishments = ({getPlacesDataTC, places, isFetching}) => {

    useEffect(() => {
        getPlacesDataTC()
    }, [])

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
                                        <a target="_blank" href={'https://www.openstreetmap.org/' + p.properties.osm}>Точка на openstreetmap</a>
                                        {/*<a href={'https://yandex.ru/maps/19/syktyvkar/?ll=50.825529%2C61.672964&mode=search&sll=50.825462%2C61.672889&text=61.672889%2C50.825462&z=16.33' + p.geometry.coordinates[0]}>Точка на Яндекс.Карте</a>*/}
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
        isFetching: state.places.isFetching
    }
}

export default connect(mapStateToProps, {getPlacesDataTC})(Establishments)