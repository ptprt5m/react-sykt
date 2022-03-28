import React from 'react'
import AttractionsData from '../../data/attractions-data'
import Img from '../commons/Img'

const Attractions = () => {
    return (
        <div className="wrapper">
            <h1>Достопримечательности</h1>
            <div className="main__wrapper-items">
                {AttractionsData.map(att => {
                    return (
                        <div className="main__wrapper-item">
                            <Img path={att.img} nameClass={'main__wrapper-item-photo'} />
                            <h3>{att.title}</h3>
                            <p>{att.desc}</p>
                            <span>{att.address}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Attractions
