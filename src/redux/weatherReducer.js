import {weatherAPI} from "../api/apiWeather";

const SET_TEMP = 'weatherReducer/SET_TEMP'
const SET_WEATHER_DATA = 'weatherReducer/SET_WEATHER_DATA'
const SET_FEELS_LIKE = 'weatherReducer/SET_FEELS_LIKE'
const SET_PRESSURE = 'weatherReducer/SET_PRESSURE'
const SET_HUMIDITY = 'weatherReducer/SET_HUMIDITY'
const SET_WIND_SPEED = 'weatherReducer/SET_WIND_SPEED'
const SET_WIND_DEG = 'weatherReducer/SET_WIND_DEG'
const SET_WEATHER_LIST = 'weatherReducer/SET_WEATHER_LIST'
const SET_WEATHER_ICON = 'weatherReducer/SET_WEATHER_ICON'
const SET_WEATHER_INFO = 'weatherReducer/SET_WEATHER_INFO'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'

let initialState = {
    weatherData: {},

    temp: null,
    feelsLike: null,
    pressure: null,
    humidity: null,
    windSpeed: null,
    windDeg: null,
    weatherList: [],
    weatherIcon: null,
    weatherInfo: null,
    isFetching: false
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA: {
            return {
                ...state,
                weatherData: action.data
            }
        }
        case SET_TEMP: {
            return {
                ...state,
                temp: action.temp
            }
        }
        case SET_PRESSURE: {
            return {
                ...state,
                pressure: action.pressure
            }
        }
        case SET_FEELS_LIKE: {
            return {
                ...state,
                feelsLike: action.temp
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
        case SET_WEATHER_LIST: {
            return {
                ...state,
                weatherList: action.weatherList
            }
        }
        case SET_WEATHER_ICON: {
            return {
                ...state,
                weatherIcon: action.weatherIcon
            }
        }
        case SET_WEATHER_INFO: {
            return {
                ...state,
                weatherInfo: action.info
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

export const setWeatherData = (data) => ({type: SET_WEATHER_DATA, data})

export const setTemp = (temp) => ({type: SET_TEMP, temp})
export const setFeelsLike = (temp) => ({type: SET_FEELS_LIKE, temp})
export const setPressure = (pressure) => ({type: SET_PRESSURE, pressure})
export const setHumidity = (humidity) => ({type: SET_HUMIDITY, humidity})
export const setWindSpeed = (windSpeed) => ({type: SET_WIND_SPEED, windSpeed})
export const setWindDeg = (windDeg) => ({type: SET_WIND_DEG, windDeg})
export const setWeatherList = (weatherList) => ({type: SET_WEATHER_LIST, weatherList})
export const setWeatherIcon = (weatherIcon) => ({type: SET_WEATHER_ICON, weatherIcon})
export const setWeatherInfo = (info) => ({type: SET_WEATHER_INFO, info})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherDataTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        weatherAPI.getCurrentWeather('Syktyvkar')
            .then(data => {
                    if (data.cod === 200) {
                        dispatch(setWeatherData(data))

                        dispatch(setTemp(Math.round(data.main.temp)))
                        dispatch(setFeelsLike(Math.round(data.main.feels_like)))
                        dispatch(setPressure(data.main.pressure))
                        dispatch(setHumidity(data.main.humidity))
                        dispatch(setWeatherIcon(data.weather[0].icon))
                        dispatch(setWindSpeed(Math.round(data.wind.speed)))
                        dispatch(setWeatherInfo(data.weather[0].description))
                        dispatch(setWindDeg(data.wind.deg))
                        dispatch(toggleIsFetching(false))
                    }
                }
            );
    }
}

export const getHourlyWeatherDataTC = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        weatherAPI.getHourlyWeather('Syktyvkar')
            .then(data => {
                    if (data.cod === '200') {
                        dispatch(setWeatherList(data.list))
                        dispatch(toggleIsFetching(false))
                    }
                }
            );
    }
}

export default weatherReducer