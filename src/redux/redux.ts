import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import loginReducer from './loginReducer'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import placesReducer from './placesReducer'
import appReducer from './appReducer'
import weatherReducer from './weatherReducer'
import staticReducer from './staticReducer'

let rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    weather: weatherReducer,
    places: placesReducer,
    static: staticReducer,
    form: formReducer
})

type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
// @ts-ignore
window.store = store
export default store