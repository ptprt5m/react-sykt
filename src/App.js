import React from 'react'
import './App.css';
import './styles/style.scss'
import './styles/header__nav.css'
import Header from "./components/Header";
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

function App() {
    return (
        <div className="App">
            <Header/>

            <main className="main">
              <Routes>
                <Route exact path='/' element={<Homepage />}/>
                <Route exact path='/about' element={<About />}/>
                <Route exact path='/attractions' element={<Attractions />}/>
                <Route exact path='/establishments' element={<Establishments />}/>
                <Route exact path='/stars' element={<Stars />}/>
                <Route exact path='/map' element={<Map />}/>
                <Route exact path='/weather' element={<Weather />}/>
                <Route exact path='/about' element={<About />}/>

                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/forgot' element={<Forgot />}/>
                <Route exact path='/signUp' element={<SignUp />}/>
              </Routes>
            </main>

            <Footer/>
        </div>
    );
}

export default App;
