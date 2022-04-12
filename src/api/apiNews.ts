import axios from 'axios'
import {NewsDataType} from '.././types/types'

const instance = axios.create({
    withCredentials: true,
    baseURL: ''
})

const APIKEY = ''

export const newsApi = {
    getNews() {
        return instance.get<NewsDataType>(``)
            .then(responsive => responsive.data)
    }
}
