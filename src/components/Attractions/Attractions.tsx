import React, {useEffect} from 'react'
import Img from '../commons/Img'
import {connect} from 'react-redux'
import {AppStateType} from '../../redux/redux'
import {getAttractionsData} from '../../redux/staticReducer'
import {AttractionsType} from '../../api/apiStatic'
import Preloader from '../commons/Preloader'

type MapStatePropsType = {
    isFetching: boolean,
    attractions: Array<AttractionsType> | null
}

type MapDispatchPropsType = {
    getAttractionsData: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Attractions: React.FC<PropsType> = ({getAttractionsData, isFetching, attractions}) => {

    useEffect(() => {
        getAttractionsData()
    }, [])

    return (
        <div className="wrapper">
            <h1>Достопримечательности</h1>
            {isFetching ? <Preloader/> :
                <div className="main__wrapper-items">
                    {attractions ? attractions.map(att => {
                        return (
                            <div className="main__wrapper-item">
                                <Img path={att.img} nameClass={'main__wrapper-item-photo'} />
                                <h3>{att.title}</h3>
                                <p>{att.desc}</p>
                                <span>{att.address}</span>
                            </div>
                        )
                    }): null}
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.static.isFetching,
        attractions: state.static.attractions,
    }
}

export default connect(mapStateToProps, {
    getAttractionsData
})(Attractions)
