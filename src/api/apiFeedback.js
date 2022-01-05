import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '/'
})

const APIKEY = ""

export const apiFeedback = {
    sendFeedback() {
        return instance.get(``)
            .then(responsive => responsive.data)
    }
}
