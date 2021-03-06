import {weatherAPI, weatherResultCode} from '../api/apiWeather'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux'
import {getFiveDays, getTodayDate, getTomorrowDate} from '../data/weather-data'

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

type WeatherItem = {
    clouds: { all: number }
    dt: number
    dt_txt: string
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    }
    pop: number
    sys: { pod: string }
    visibility: number
    weather: {
        0: { id: number, main: string, description: string, icon: string }
        length: number
    }
    wind: { speed: number, deg: number, gust: number }
}

type initialStateType = {
    weatherData: object | null

    temp: number | null
    feelsLike: number | null
    pressure: number | null
    humidity: number | null
    windSpeed: number | null
    windDeg: number | null
    weatherList: Array<WeatherItem> | null
    weatherIcon: string | null
    weatherInfo: string | null
    isFetching: boolean
}

let initialState: initialStateType = {
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

const weatherReducer = (state = initialState, action: ActionType): initialStateType => {
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

type ActionType =
    setWeatherDataType
    | setTempType
    | setFeelsLikeType
    | setPressureType
    | setHumidityType
    | setWindSpeedType
    | setWindDegType
    | setWeatherListType
    | setWeatherIconType
    | setWeatherInfoType
    | toggleIsFetchingType

type setWeatherDataType = {
    type: typeof SET_WEATHER_DATA
    data: object
}
export const setWeatherData = (data: object): setWeatherDataType => ({type: SET_WEATHER_DATA, data})

type setTempType = {
    type: typeof SET_TEMP
    temp: number
}
type setFeelsLikeType = {
    type: typeof SET_FEELS_LIKE
    temp: number
}
type setPressureType = {
    type: typeof SET_PRESSURE
    pressure: number
}
type setHumidityType = {
    type: typeof SET_HUMIDITY
    humidity: number
}
type setWindSpeedType = {
    type: typeof SET_WIND_SPEED
    windSpeed: number
}
type setWindDegType = {
    type: typeof SET_WIND_DEG
    windDeg: number
}
type setWeatherListType = {
    type: typeof SET_WEATHER_LIST
    weatherList: Array<WeatherItem>
}
type setWeatherIconType = {
    type: typeof SET_WEATHER_ICON
    weatherIcon: string
}
type setWeatherInfoType = {
    type: typeof SET_WEATHER_INFO
    info: string
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const setTemp = (temp: number): setTempType => ({type: SET_TEMP, temp})
export const setFeelsLike = (temp: number): setFeelsLikeType => ({type: SET_FEELS_LIKE, temp})
export const setPressure = (pressure: number): setPressureType => ({type: SET_PRESSURE, pressure})
export const setHumidity = (humidity: number): setHumidityType => ({type: SET_HUMIDITY, humidity})
export const setWindSpeed = (windSpeed: number): setWindSpeedType => ({type: SET_WIND_SPEED, windSpeed})
export const setWindDeg = (windDeg: number): setWindDegType => ({type: SET_WIND_DEG, windDeg})
export const setWeatherList = (weatherList: Array<WeatherItem>): setWeatherListType => ({
    type: SET_WEATHER_LIST,
    weatherList
})
export const setWeatherIcon = (weatherIcon: string): setWeatherIconType => ({type: SET_WEATHER_ICON, weatherIcon})
export const setWeatherInfo = (info: string): setWeatherInfoType => ({type: SET_WEATHER_INFO, info})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getWeatherDataTC = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await weatherAPI.getCurrentWeather('Syktyvkar')

        if (response.cod === weatherResultCode.SuccessCurrent) {
            dispatch(setWeatherData(response))

            dispatch(setTemp(Math.round(response.main.temp)))
            dispatch(setFeelsLike(Math.round(response.main.feels_like)))
            dispatch(setPressure(response.main.pressure))
            dispatch(setHumidity(response.main.humidity))
            dispatch(setWeatherIcon(response.weather[0].icon))
            dispatch(setWindSpeed(Math.round(response.wind.speed)))
            dispatch(setWeatherInfo(response.weather[0].description))
            dispatch(setWindDeg(response.wind.deg))
            dispatch(toggleIsFetching(false))
        }
    }
}

export const getHourlyWeatherDataTC = (dataFunc: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await weatherAPI.getHourlyWeather('Syktyvkar')

        if (response.cod === weatherResultCode.SuccessHourly) {
            let filteredWeatherList = [] as Array<WeatherItem>

            switch (dataFunc) {
                case 'today':
                    response.list.map(weatherDay => {
                        if (weatherDay.dt_txt.slice(0, 10) === getTodayDate()) {
                            filteredWeatherList.push(weatherDay)
                        }
                    })
                    break
                case 'tomorrow':
                    response.list.map(weatherDay => {
                        if (weatherDay.dt_txt.slice(0, 10) === getTomorrowDate()) {
                            filteredWeatherList.push(weatherDay)
                        }
                    })
                    break
                case 'fiveDays':
                    response.list.map(weatherDay => {
                        for(let i = 0; i < 5; i++) {
                            if (weatherDay.dt_txt === (getFiveDays()[i]) + ' ' + '00:00:00') {
                                filteredWeatherList.push(weatherDay)
                            } else if (weatherDay.dt_txt === (getFiveDays()[i]) + ' ' + '15:00:00') {
                                filteredWeatherList.push(weatherDay)
                            }
                        }
                    })
                    break
            }

            dispatch(setWeatherList(filteredWeatherList))
            dispatch(toggleIsFetching(false))
        }
    }
}

export default weatherReducer