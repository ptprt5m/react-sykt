import {getAuthUser} from './loginReducer'
import {Dispatch} from 'redux'
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux";

const SET_INITIALIZED = 'app/SET-INITIALIZED'

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

type ActionType = InitializedSuccessActionType

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED})

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        let promise = dispatch(getAuthUser())
        Promise.all([promise])
            .then(() => dispatch(initializedSuccess()))
    }
}

export default appReducer