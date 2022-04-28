import React, {useEffect} from 'react'
import Preloader from '../commons/Preloader'
import {AppStateType} from '../../redux/redux'
import {connect} from 'react-redux'
import {
    getInfoXIDTC,
    getPlacesDataTC,
    InfoPlaceType,
    PlaceType,
    setNewPlacesTC,
    setPageSize
} from '../../redux/placesReducer'
import Leisure from "./Leisure";

type MapStatePropsType = {
    places: Array<PlaceType> | null
    placeInfo: Array<InfoPlaceType> | null
    placeInfoId: string | null
    isFetching: boolean
    isMiniFetching: boolean
    isXidFetching: boolean
    pageSize: number
    totalPlacesCount: number
}

type MapDispatchPropsType = {
    getPlacesDataTC: (pageSize: number, kinds: string) => void
    setNewPlacesTC: (pageSize: number, kinds: string) => void
    getInfoXIDTC: (XID: string, placeInfoId: string | null) => void
    setPageSize: (pageSize: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Leisures: React.FC<PropsType> = ({getPlacesDataTC, setNewPlacesTC, getInfoXIDTC,
                     places, placeInfo, placeInfoId, isFetching, pageSize,
                     totalPlacesCount, setPageSize, isMiniFetching, isXidFetching}) => {
    useEffect(() => {
        getPlacesDataTC(pageSize, 'cultural')
    }, [])

    useEffect(() => {
        setNewPlacesTC(pageSize, 'cultural')
    }, [pageSize])

    let getInfoXID = (XID: string, placeInfoId: string | null) => {
        getInfoXIDTC(XID, placeInfoId)
    }

    let to2GIS = (lon: number, lat: number) => {
        return `https://2gis.ru/syktyvkar/geo/${lon},${lat}?m=${lon},${lat}/17.52`
    }
    return (
        <div className="wrapper">
            <h1>Кино и театры</h1>
            {isFetching ? <Preloader/> :
                <div className="main__wrapper-items">
                    {places ? places.map(p => (
                        p.properties.name != '' ?
                            (<Leisure key={p.id}
                                            id={p.id}
                                            XID={p.properties.xid}
                                            name={p.properties.name}
                                            osm={p.properties.osm}
                                            coord={p.geometry.coordinates}
                                            getInfoXID={getInfoXID}
                                            to2GIS={to2GIS}
                                            placeInfo={placeInfo}
                                            placeInfoId={placeInfoId}
                                            isXidFetching={isXidFetching}
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
        isXidFetching: state.places.isXidFetching,
        pageSize: state.places.pageSize,
        totalPlacesCount: state.places.totalPlacesCount
    }
}

export default connect(mapStateToProps, {
    getPlacesDataTC,
    setNewPlacesTC,
    getInfoXIDTC,
    setPageSize
})(Leisures)