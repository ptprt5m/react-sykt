import React from 'react'
import classes from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={classes.ldsRollerWrapper}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader