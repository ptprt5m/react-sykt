import React, {useEffect} from 'react'
import './App.css';
import './styles/style.scss';
import './styles/header__nav.scss';
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import {Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Attractions from "./components/Attractions";
import Map from "./components/Map";
import Stars from "./components/Stars";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import SignUp from "./components/SignUp";
import Weather from "./components/Weather";
import Establishments from "./components/Establishments";
import Hotels from "./components/Hotels";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import InitializingPage from "./components/commons/InitializingPage";
import HeaderContainer from "./components/Header/HeaderContainer";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile/Profile";

function App(props) {

    useEffect(() => {
        props.initializeApp()
    }, []);


    if (!props.initialized) {
        return <InitializingPage />
    }

    return (
        <div className="App">
            <HeaderContainer />

            <main className="main">
              <Routes>
                <Route exact path='/' element={<Homepage />}/>
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/attractions' element={<Attractions />}/>
                <Route exact path='/establishments' element={<Establishments />}/>
                <Route exact path='/hotels' element={<Hotels />}/>
                <Route exact path='/stars' element={<Stars />}/>
                <Route exact path='/map' element={<Map />}/>
                <Route exact path='/weather' element={<Weather />}/>
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/feedback' element={<Feedback />}/>
                <Route exact path='/profile' element={<Profile />}/>

                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/forgot' element={<Forgot />}/>
                <Route exact path='/signUp' element={<SignUp />}/>
              </Routes>
            </main>

            <Footer/>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
