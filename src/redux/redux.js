import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import loginReducer from "./loginReducer";
import {reducer as formReducer} from 'redux-form';
import weatherReducer from "./weatherReducer";
import thunkMiddleware from 'redux-thunk';
import placesReducer from "./placesReducer";
import appReducer from "./appReducer";


let reducers = combineReducers({
    login: loginReducer,
    app: appReducer,
    weather: weatherReducer,
    places: placesReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
window.store = store
export default store