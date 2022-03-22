import axios from 'axios'
import {weatherGetCurrentWeatherType, weatherGetHourlyWeatherType} from '../types/types'

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const APIKEY: string = "762ffa89c6a0dcbb223d92c82037d1ec"

export enum weatherResultCode {
    SuccessCurrent = 200,
    SuccessHourly = '200'
}

export const weatherAPI = {
    getCurrentWeather(cityName: string) {
        return instance.get<weatherGetCurrentWeatherType>(`/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=ru`)
            .then(responsive => responsive.data)
    },
    getHourlyWeather(cityName: string) {
        return instance.get<weatherGetHourlyWeatherType>(`/forecast?q=${cityName}&appid=${APIKEY}&units=metric&lang=ru`)
            .then(responsive => responsive.data)
    }
}
