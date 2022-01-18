import React from 'react'
import LazyLoad from "react-lazyload";
import StarsData from "../data/stars-data"

const Stars = () => {

    return (
        <div className="wrapper">
            <h1>Известные личности</h1>
            <div className="main__wrapper-items">
                {StarsData.map(star => {
                    return (
                        <div className="main__wrapper-item">
                            <LazyLoad height={400}>
                                <img className="main__wrapper-item-photo" src={star.img}/>
                            </LazyLoad>
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