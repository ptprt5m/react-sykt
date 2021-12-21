import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

const APIKEY = "762ffa89c6a0dcbb223d92c82037d1ec"

export const weatherAPI = {
    getCity(cityName) {
        return instance.get(`?q=${cityName}&appid=${APIKEY}&units=metric`)
            .then(responsive => responsive.data)
    }
}
