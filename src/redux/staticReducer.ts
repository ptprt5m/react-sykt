import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux'
import {AttractionsType, staticAPI} from '../api/apiStatic'

const SET_ATTRACTIONS_DATA = 'login/SET-ATTRACTIONS-DATA'
const TOGGLE_IS_STATIC_FETCHING = 'login/TOGGLE-IS-STATIC-FETCHING'

export type InitialStateType = {
    isFetching: boolean
    attractions: Array<AttractionsType> | null
}
let initialState: InitialStateType = {
    isFetching: false,
    attractions: []
}

const staticReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ATTRACTIONS_DATA:
            return {
                ...state,
                attractions: action.data
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

type ActionType = SetAttractionsDataActionType | toggleIsStaticFetchingType

type SetAttractionsDataActionType = {
    type: typeof SET_ATTRACTIONS_DATA
    data: Array<AttractionsType>
}

export const setAttractionsData = (data: Array<AttractionsType>): SetAttractionsDataActionType => ({
    type: SET_ATTRACTIONS_DATA,
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

export default staticReducer