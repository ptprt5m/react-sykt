import {getAuthUser} from "./loginReducer";


const SET_INITIALIZED = 'app/SET-INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
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

export const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUser())
        Promise.all([promise])
            .then(() => dispatch(initializedSuccess()))
    }
}
export default appReducer;