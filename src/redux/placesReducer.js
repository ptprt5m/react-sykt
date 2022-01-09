import {cafesAPI} from "../api/apiPlaces";
import {twoGisAPI} from "../api/api2GIS";

const SET_PLACES = 'weatherReducer/SET_PLACES'
const SET_INFO_PLACE = 'weatherReducer/SET_INFO_PLACE'
const SET_PAGE_SIZE = 'weatherReducer/SET_PAGE_SIZE'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_MINI_FETCHING = 'weatherReducer/TOGGLE_IS_MINI_FETCHING'
const SET_TOTAL_PLACES_COUNT = 'weatherReducer/SET_TOTAL_PLACES_COUNT'

let initialState = {
    places: null,
    placeInfo: null,
    isFetching: false,
    isMiniFetching: false,
    pageSize: 10,
    totalPlacesCount: 0
}

const placesReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const setPlaces = (places) => ({type: SET_PLACES, places})
export const setInfoPlace = (items) => ({type: SET_INFO_PLACE, items})
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})
export const setTotalPlacesCount = (totalPlacesCount) => ({type: SET_TOTAL_PLACES_COUNT, totalPlacesCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsMiniFetching = (isMiniFetching) => ({type: TOGGLE_IS_MINI_FETCHING, isMiniFetching})

export const getPlacesDataTC = (pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    cafesAPI.getCafes(pageSize)
        .then(data => {
                if (data.features) {
                    dispatch(setTotalPlacesCount(data.features.length))
                    dispatch(setPlaces(data.features))
                    dispatch(toggleIsFetching(false))
                }
            }
        );
}

export const setNewPlacesTC = (pageSize) => (dispatch) => {
    dispatch(toggleIsMiniFetching(true))
    cafesAPI.getCafes(pageSize)
        .then(data => {
                if (data.features) {
                    dispatch(setTotalPlacesCount(data.features.length))
                    dispatch(setPlaces(data.features))
                    dispatch(toggleIsMiniFetching(false))
                }
            }
        );
}

export const getInfo2GISTC = (lat, lon) => (dispatch) => {
    twoGisAPI.getInfoAboutTarget(lat, lon)
        .then(data => {
                if (data.meta.code === 200) {
                    dispatch(setInfoPlace(data.result.items))
                }
            }
        );
}


export default placesReducer