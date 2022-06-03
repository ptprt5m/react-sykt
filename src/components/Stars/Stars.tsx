import React, {useEffect} from 'react'
import Img from '../commons/Img'
import {AppStateType} from '../../redux/redux'
import {connect} from 'react-redux'
import {getStarsData} from '../../redux/staticReducer'
import {StarsType} from '../../api/apiStatic'
import Preloader from '../commons/Preloader'

type MapStatePropsType = {
    isFetching: boolean,
    stars: Array<StarsType> | null
}

type MapDispatchPropsType = {
    getStarsData: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Stars: React.FC<PropsType> = ({getStarsData, isFetching, stars}) => {

    useEffect(() => {
        getStarsData()
    }, [])

    return (
        <div className="wrapper">
            <h1>Известные личности</h1>
            {isFetching ? <Preloader/> :
                <div className="main__wrapper-items">
                    {stars? stars.map(star => {
                        return (
                            <div className="main__wrapper-item">
                                <Img path={star.img} nameClass={'main__wrapper-item-photo'} />
                                <h3>{star.title}</h3>
                                <p>{star.desc}</p>
                                <span>{star.fact}</span>
                            </div>
                        )
                    }) : null}
                </div>
            }
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.static.isFetching,
        stars: state.static.stars,
    }
}

export default connect(mapStateToProps, {
    getStarsData
})(Stars)
