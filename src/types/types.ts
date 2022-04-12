type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

type twoGisItemsType = {
    full_name: string
    id: string
    name: string
    point: {
        lat: number
        lon: number
    }
    subtype: string
    type: string
}

type twoGisMetaType = {
    api_version: string
    code: number
    issue_date: string
}

export type twoGisGetInfoType = {
    meta: twoGisMetaType
    result: {
        items: Array<twoGisItemsType>
        total: number
    }
}

type placesFeaturesPropertiesType = {
    xid: string
    name: string
    rate: number
    osm: string
    kinds: string
}

type placesFeaturesType = {
    type: string
    id: string
    geometry: {
        type: string
        coordinates: Array<number>
    }
    properties: placesFeaturesPropertiesType
}

export type placesGetCafesType = {
    type: string
    features: Array<placesFeaturesType>
}

type coordType = {
    lon: number
    lat: number
}

type weatherType = {
    id: number
    "main": string
    "description": string
    "icon": string
}

type weatherMainType = {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

export type weatherGetCurrentWeatherType = {
    coord: coordType
    weather: Array<weatherType>
    base: string
    main: weatherMainType
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    }
    clouds: {
        all: number
    }
    dt: number
    sys: {
        type: number
        id: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

type HourlyWeatherListType = {
    dt: number
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        sea_level: number
        grnd_level: number
        humidity: number
        temp_kf: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        }
    ]
    clouds: {
        all: number
    }
    wind: {
        speed: number
        deg: number
        gust: number
    }
    visibility: number
    pop: number
    sys: {
        pod: string
    }
    dt_txt: string
}

export type weatherGetHourlyWeatherType = {
    cod: string
    message: number
    cnt: number
    list: Array<HourlyWeatherListType>
    city: {
        id: number
        name: string
        coord: coordType
        country: "RU",
        population: number
        timezone: number
        sunrise: number
        sunset: number
    }
}

export type NewsDataType = {

}