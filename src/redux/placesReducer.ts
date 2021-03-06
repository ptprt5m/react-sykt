import {cafesAPI} from '../api/apiPlaces'
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux'

const SET_PLACES = 'weatherReducer/SET_PLACES'
const SET_INFO_PLACE = 'weatherReducer/SET_INFO_PLACE'
const SET_INFO_PLACE_ID = 'weatherReducer/SET_INFO_PLACE_ID'
const SET_PAGE_SIZE = 'weatherReducer/SET_PAGE_SIZE'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_MINI_FETCHING = 'weatherReducer/TOGGLE_IS_MINI_FETCHING'
const TOGGLE_IS_XID_FETCHING = 'weatherReducer/TOGGLE_IS_XID_FETCHING'
const SET_TOTAL_PLACES_COUNT = 'weatherReducer/SET_TOTAL_PLACES_COUNT'

export type InfoPlaceType = {
    full_name: string
    id: string
    name: string
    point: {
        lat: number
        lon: number
    }
    subtype: string
    type: string
    address_name?: string
    purpose_name?: string
}

type PropertiesType = {
    xid: string
    name: string
    rate: number
    osm: string
    kinds: string
}

type GeometryType = {
    type: string
    coordinates: Array<number>
}

export type PlaceType = {
    type: string
    id: string
    geometry: GeometryType
    properties: PropertiesType
}

type initialStateType = {
    places: Array<PlaceType> | null
    placeInfo: Array<InfoPlaceType> | null
    placeInfoId: string | null
    isFetching: boolean
    isMiniFetching: boolean
    isXidFetching: boolean
    pageSize: number
    totalPlacesCount: number
}

let initialState: initialStateType = {
    places: null,
    placeInfo: null,
    placeInfoId: null,
    isFetching: false,
    isMiniFetching: false,
    isXidFetching: false,
    pageSize: 10,
    totalPlacesCount: 0
}

const placesReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case SET_PLACES:
            return {
                ...state,
                places: action.places
            }
        case SET_INFO_PLACE: {
            return {
                ...state,
                placeInfo: action.items
            };
        }
        case SET_INFO_PLACE_ID: {
            return {
                ...state,
                placeInfoId: action.placeInfoId
            };
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize + 10
            };
        }
        case SET_TOTAL_PLACES_COUNT: {
            return {
                ...state,
                totalPlacesCount: action.totalPlacesCount
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_MINI_FETCHING: {
            return {
                ...state,
                isMiniFetching: action.isMiniFetching
            };
        }
        case TOGGLE_IS_XID_FETCHING: {
            return {
                ...state,
                isXidFetching: action.isXidFetching,
                placeInfoId: action.placeInfoId
            };
        }
        default:
            return state;
    }
}

type ActionType = setPlacesType | setInfoPlaceType | setInfoPlaceIdType | setPageSizeType
    | setTotalPlacesCountType | toggleIsFetchingType | toggleIsMiniFetchingType | toggleIsXidFetchingType

type setPlacesType = {
    type: typeof SET_PLACES
    places: Array<PlaceType> | null
}
type setInfoPlaceType = {
    type: typeof SET_INFO_PLACE
    items: Array<InfoPlaceType> | null
}
type setInfoPlaceIdType = {
    type: typeof SET_INFO_PLACE_ID
    placeInfoId: string | null
}
type setPageSizeType = {
    type: typeof SET_PAGE_SIZE
    pageSize: number
}
type setTotalPlacesCountType = {
    type: typeof SET_TOTAL_PLACES_COUNT
    totalPlacesCount: number
}
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type toggleIsMiniFetchingType = {
    type: typeof TOGGLE_IS_MINI_FETCHING
    isMiniFetching: boolean
}
type toggleIsXidFetchingType = {
    type: typeof TOGGLE_IS_XID_FETCHING
    isXidFetching: boolean
    placeInfoId: string | null
}

export const setPlaces = (places: Array<PlaceType>): setPlacesType => ({type: SET_PLACES, places})
export const setInfoPlace = (items: any): setInfoPlaceType => ({type: SET_INFO_PLACE, items})
export const setInfoPlaceId = (placeInfoId: string | null): setInfoPlaceIdType => ({type: SET_INFO_PLACE_ID, placeInfoId})
export const setPageSize = (pageSize: number): setPageSizeType => ({type: SET_PAGE_SIZE, pageSize})
export const setTotalPlacesCount = (totalPlacesCount: number): setTotalPlacesCountType => ({
    type: SET_TOTAL_PLACES_COUNT,
    totalPlacesCount
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsMiniFetching = (isMiniFetching: boolean): toggleIsMiniFetchingType => ({
    type: TOGGLE_IS_MINI_FETCHING,
    isMiniFetching
})
export const toggleIsXidFetching = (isXidFetching: boolean, placeInfoId: string | null): toggleIsXidFetchingType => ({
    type: TOGGLE_IS_XID_FETCHING,
    isXidFetching,
    placeInfoId
})

export const getPlacesDataTC = (pageSize: number, kinds: string): ThunkAction<void, AppStateType, unknown, ActionType> => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await cafesAPI.getObjects(pageSize, kinds)

    if (response.features) {
        dispatch(setTotalPlacesCount(response.features.length))
        dispatch(setPlaces(response.features))
        dispatch(toggleIsFetching(false))
    }
}

export const setNewPlacesTC = (pageSize: number, kinds: string): ThunkAction<void, AppStateType, unknown, ActionType> => async (dispatch) => {
    dispatch(toggleIsMiniFetching(true))
    let response = await cafesAPI.getObjects(pageSize, kinds)
    if (response.features) {
        dispatch(setTotalPlacesCount(response.features.length))
        dispatch(setPlaces(response.features))
        dispatch(toggleIsMiniFetching(false))
    }
}

export const getInfoXIDTC = (XID: string, id: string | null): ThunkAction<void, AppStateType, unknown, ActionType> => async (dispatch) => {
    dispatch(toggleIsXidFetching(true, id))
    let response = await cafesAPI.getInfoAboutTarget(XID)
    dispatch(setInfoPlaceId(id))
    dispatch(setInfoPlace(response))
    dispatch(toggleIsXidFetching(false, id))
}

export default placesReducer