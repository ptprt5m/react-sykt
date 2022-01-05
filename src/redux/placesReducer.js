import {cafesAPI} from "../api/apiPlaces";
import {twoGisAPI} from "../api/api2GIS";

const SET_PLACES = 'weatherReducer/SET_PLACES'
const SET_INFO_PLACE = 'weatherReducer/SET_INFO_PLACE'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'

let initialState = {
    places: null,
    placeInfo: null,
    isFetching: false
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
}

export const setPlaces = (places) => ({type: SET_PLACES, places})
export const setInfoPlace = (items) => ({type: SET_INFO_PLACE, items})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getPlacesDataTC = () => (dispatch) => {
    dispatch(toggleIsFetching(true))
    cafesAPI.getCafes()
        .then(data => {
                if (data.features) {
                    dispatch(setPlaces(data.features))
                    dispatch(toggleIsFetching(false))
                }
            }
        );
}

export const getInfo2GISTC = (lat, lon) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    twoGisAPI.getInfoAboutTarget(lat, lon)
        .then(data => {
                if (data.meta.code === 200) {
                    dispatch(setInfoPlace(data.result.items))
                    dispatch(toggleIsFetching(false))
                }
            }
        );
}


export default placesReducer