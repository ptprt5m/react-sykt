import axios from 'axios'
import {twoGisGetInfoType} from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://catalog.api.2gis.com/3.0/items/'
})

const APIKEY = 'ruudhs2910'

export enum twoGisResultCode {
    Success = 200
}

export const twoGisAPI = {
    getInfoAboutTarget(lat: number, lon: number) {
        return instance.get<twoGisGetInfoType>(`geocode?lat=${lat}&lon=${lon}&fields=items.point&key=${APIKEY}`)
            .then(responsive => responsive.data)
    }
}