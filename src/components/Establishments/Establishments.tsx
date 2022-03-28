import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
    getInfo2GISTC,
    getPlacesDataTC, PlaceType, InfoPlaceType,
    setNewPlacesTC,
    setPageSize
} from '../../redux/placesReducer'
import Preloader from '../commons/Preloader'
import {AppStateType} from '../../redux/redux'
import Establishment from './Establishment'

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
                            (<Establishment key={p.id}
                                            name={p.properties.name}
                                            osm={p.properties.osm}
                                            coord={p.geometry.coordinates}
                                            getInfo2GIS={getInfo2GIS}
                                            to2GIS={to2GIS}
                                            placeInfo={placeInfo}
                                            placeInfoId={placeInfoId}
                            />) : null
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