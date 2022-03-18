import {getAuthUser} from "./loginReducer";

const SET_INITIALIZED = 'app/SET-INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
export const initializedSuccess = (): InitializedSuccessActionType => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUser())
        Promise.all([promise])
            .then(() => dispatch(initializedSuccess()))
    }
}
export default appReducer;