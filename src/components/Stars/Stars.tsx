import React from 'react'
import StarsData from '../../data/stars-data'
import Img from '../commons/Img'

const Stars = () => {

    return (
        <div className="wrapper">
            <h1>Известные личности</h1>
            <div className="main__wrapper-items">
                {StarsData.map(star => {
                    return (
                        <div className="main__wrapper-item">
                            <Img path={star.img} nameClass={'main__wrapper-item-photo'} />
                            <h3>{star.title}</h3>
                            <p>{star.desc}</p>
                            <span>{star.fact}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stars