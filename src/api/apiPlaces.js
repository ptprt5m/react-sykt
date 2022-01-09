import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://api.opentripmap.com/0.1/ru/'
})

const APIKEY = "5ae2e3f221c38a28845f05b69c08da77e90b0f3a322142c74593c457"

export const cafesAPI = {
    getCafes(pageSize) {
        return instance.get(`places/bbox?lon_min=50.78872&lat_min=61.63447&lon_max=50.8656&lat_max=61.6961&kinds=cafes&limit=${pageSize}&format=geojson&apikey=${APIKEY}`)
            .then(responsive => responsive.data)
    }
}
