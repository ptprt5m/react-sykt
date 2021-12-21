import {cafesAPI} from "../api/apiPlaces";

const SET_PLACES = 'weatherReducer/SET_PLACES'
const TOGGLE_IS_FETCHING = 'weatherReducer/TOGGLE_IS_FETCHING'

let initialState = {
    places: null,
    isFetching: false
}

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLACES:
            return {
                ...state,
                places: action.places
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


export default placesReducer