import React from 'react'
import Preloader from "./Preloader";

const InitializingPage = () => {
    return (
        <div className="wrapper">
            <div className="initializing">
                <h1>Пожалуйста, подождите... Приложение загружается</h1>
                <Preloader />
            </div>
        </div>
    )
}

export default InitializingPage