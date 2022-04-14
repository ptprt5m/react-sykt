import axios from 'axios'
import {placesGetCafesType} from '../types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://api.opentripmap.com/0.1/ru/'
})

const APIKEY = '5ae2e3f221c38a28845f05b69c08da77e90b0f3a322142c74593c457'
const radiusInMeter = 5000
const kinds = 'cafes,foods'

export const cafesAPI = {
    getCafes(pageSize: number) {
        return instance.get<placesGetCafesType>(`places/radius?radius=${radiusInMeter}&lat=61.63447&lon=50.815&kinds=${kinds}&limit=${pageSize}&format=geojson&apikey=${APIKEY}`)
            .then(responsive => responsive.data)
    },
    getInfoAboutTarget(XID: string) {
        return instance.get<any>(`places/xid/${XID}?apikey=${APIKEY}`)
            .then(responsive => responsive.data)
    }
}
