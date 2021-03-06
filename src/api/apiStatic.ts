import axios from 'axios'

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://62977bdd8d77ad6f75041e1b.mockapi.io/api/v1/'
})

export type AttractionsType = {
    img: string
    title: string
    desc: string
    address: string
}

export type StarsType = {
    img: string
    title: string
    desc: string
    fact: string
}

export const staticAPI = {
    getAttractions() {
        return instance.get<AttractionsType[]>(`attractions`)
            .then(responsive => responsive)
    },
    getStars() {
        return instance.get<StarsType[]>(`stars`)
            .then(responsive => responsive)
    }
}


