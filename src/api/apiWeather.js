import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

const APIKEY = "762ffa89c6a0dcbb223d92c82037d1ec"

export const weatherAPI = {
    getCurrentWeather(cityName) {
        return instance.get(`/weather?q=${cityName}&appid=${APIKEY}&units=metric&lang=ru`)
            .then(responsive => responsive.data)
    },
    getHourlyWeather(cityName) {
        return instance.get(`/forecast?q=${cityName}&appid=${APIKEY}&units=metric&lang=ru`)
            .then(responsive => responsive.data)
    }
}
