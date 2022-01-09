import {weatherAPI} from "../api/apiWeather";

const SET_TEMP = 'weatherReducer/SET_TEMP'
const SET_PRESSURE = 'weatherReducer/SET_PRESSURE'
const SET_HUMIDITY = 'weatherReducer/SET_HUMIDITY'
const SET_WIND_SPEED = 'weatherReducer/SET_WIND_SPEED'
const SET_WIND_DEG = 'weatherReducer/SET_WIND_DEG'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'

let initialState = {
    temp: null,
    pressure: null,
    humidity: null,
    windSpeed: null,
    windDeg: null,
    isFetching: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMP:
            return {
                ...state,
                temp: action.temp
            }
        case SET_PRESSURE: {
            return {
                ...state,
                pressure: action.pressure
            }
        }
        case SET_HUMIDITY: {
            return {
                ...state,
                humidity: action.humidity
            }
        }
        case SET_WIND_SPEED: {
            return {
                ...state,
                windSpeed: action.windSpeed
            }
        }
        case SET_WIND_DEG: {
            return {
                ...state,
                windDeg: action.windDeg
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
}

export const setTemp = (temp) => ({type: SET_TEMP, temp})
export const setPressure = (pressure) => ({type: SET_PRESSURE, pressure})
export const setHumidity = (humidity) => ({type: SET_HUMIDITY, humidity})
export const setWindSpeed = (windSpeed) => ({type: SET_WIND_SPEED, windSpeed})
export const setWindDeg = (windDeg) => ({type: SET_WIND_DEG, windDeg})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherDataTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        weatherAPI.getCity('Syktyvkar')
            .then(data => {
                    if (data.cod === 200) {
                        dispatch(setTemp(Math.round(data.main.temp)))
                        dispatch(setPressure(data.main.pressure))
                        dispatch(setHumidity(data.main.humidity))
                        dispatch(setWindSpeed(Math.round(data.wind.speed)))
                        dispatch(setWindDeg(data.wind.deg))
                        dispatch(toggleIsFetching(false))
                    }
                }
            );
    }
}

export default weatherReducer