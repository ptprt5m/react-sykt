import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://catalog.api.2gis.com/3.0/items/'
})

const APIKEY = "ruudhs2910"

export const twoGisAPI = {
    getInfoAboutTarget(lat, lon) {
        return instance.get(`geocode?lat=${lat}&lon=${lon}&fields=items.point&key=${APIKEY}`)
            .then(responsive => responsive.data)
    }
}
