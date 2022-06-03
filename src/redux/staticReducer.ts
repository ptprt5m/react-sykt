import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux'
import {AttractionsType, StarsType, staticAPI} from '../api/apiStatic'

const SET_ATTRACTIONS_DATA = 'login/SET-ATTRACTIONS-DATA'
const SET_STARS_DATA = 'login/SET-STARS-DATA'
const TOGGLE_IS_STATIC_FETCHING = 'login/TOGGLE-IS-STATIC-FETCHING'

export type InitialStateType = {
    isFetching: boolean
    attractions: Array<AttractionsType> | null
    stars: Array<StarsType> | null
}
let initialState: InitialStateType = {
    isFetching: false,
    attractions: [],
    stars: []
}

const staticReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ATTRACTIONS_DATA:
            return {
                ...state,
                attractions: action.data
            };
        case SET_STARS_DATA:
            return {
                ...state,
                stars: action.data
            };
        case TOGGLE_IS_STATIC_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            };
        }
        default:
            return state;
    }
}

type ActionType = SetAttractionsDataActionType | toggleIsStaticFetchingType | SetStarsDataActionType

type SetAttractionsDataActionType = {
    type: typeof SET_ATTRACTIONS_DATA
    data: Array<AttractionsType>
}

type SetStarsDataActionType = {
    type: typeof SET_STARS_DATA
    data: Array<StarsType>
}

export const setAttractionsData = (data: Array<AttractionsType>): SetAttractionsDataActionType => ({
    type: SET_ATTRACTIONS_DATA,
    data
})

export const setStarsData = (data: Array<StarsType>): SetStarsDataActionType => ({
    type: SET_STARS_DATA,
    data
})

type toggleIsStaticFetchingType = {
    type: typeof TOGGLE_IS_STATIC_FETCHING
    isFetching: boolean
}

export const toggleIsStaticFetching = (isFetching: boolean): toggleIsStaticFetchingType => ({
    type: TOGGLE_IS_STATIC_FETCHING,
    isFetching
})

export const getAttractionsData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => async (dispatch) => {
    dispatch(toggleIsStaticFetching(true))
    let response = await staticAPI.getAttractions()
    dispatch(setAttractionsData(response.data))
    dispatch(toggleIsStaticFetching(false))
}

export const getStarsData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => async (dispatch) => {
    dispatch(toggleIsStaticFetching(true))
    let response = await staticAPI.getStars()
    dispatch(setStarsData(response.data))
    dispatch(toggleIsStaticFetching(false))
}

export default staticReducer