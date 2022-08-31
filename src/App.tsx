import React, {useEffect} from 'react'
import './App.css'
import './styles/style.scss'
import './styles/screen.scss'
import './styles/header__nav.scss'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'
import {Route, Routes} from 'react-router-dom'
import About from './components/About'
import Attractions from './components/Attractions'
import Login from './components/Login'
import Forgot from './components/Forgot/Forgot'
import SignUp from './components/SignUp'
import Establishments from './components/Establishments/Establishments'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {initializeApp} from './redux/appReducer'
import HeaderContainer from './components/Header/HeaderContainer'
import Feedback from './components/Feedback'
import Profile from './components/Profile'
import Preloader from './components/commons/Preloader'
import {AppStateType} from './redux/redux'
import News from './components/News'
import Leisure from './components/Leisures'
import Error404Page from './components/commons/Error404Page'

const Stars = React.lazy(() => import('./components/Stars/Stars'))
const Map = React.lazy(() => import('./components/Map/Map'))
const Weather = React.lazy(() => import('./components/Weather/Weather'))

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

type Props = MapStatePropsType & MapDispatchPropsType

const App: React.FC<Props> = (props) => {

    useEffect(() => {
        props.initializeApp()
    }, []);


    // if (!props.initialized) {
    //     return <InitializingPage />
    // }

    return (
        <div className="App">
            <HeaderContainer/>

            <main className="main">
            
                <React.Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/attractions' element={<Attractions/>}/>
                        <Route path='/establishments' element={<Establishments/>}/>
                        <Route path='/leisure' element={<Leisure/>}/>
                        <Route path='/stars' element={<Stars/>}/>
                        <Route path='/map' element={<Map/>}/>
                        <Route path='/weather/*' element={<Weather/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/feedback' element={<Feedback/>}/>
                        <Route path='/profile' element={<Profile/>}/>

                        <Route path='/login' element={<Login/>}/>
                        <Route path='/forgot' element={<Forgot/>}/>
                        <Route path='/signUp' element={<SignUp/>}/>

                        <Route path='*' element={<Error404Page />}/>
                    </Routes>
                </React.Suspense>
            </main>

            <Footer/>
        </div>
    );
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
