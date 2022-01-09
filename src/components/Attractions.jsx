import React from 'react'
import LazyLoad from 'react-lazyload'
import AttractionsData from '../data/attractions-data'

const Attractions = () => {
    return (
        <div className="wrapper">
            <h1>Достопримечательности</h1>
            <div className="main__wrapper-items">
                {AttractionsData.map(att => {
                    return (
                        <div className="main__wrapper-item">
                            <LazyLoad height={400}>
                                <img className="main__wrapper-item-photo" src={att.img}/>
                            </LazyLoad>
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
