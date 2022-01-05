import {apiFeedback} from "../api/apiFeedback";

const SET_FEEDBACK = 'app/SET-INITIALIZED';

let initialState = {
    initialized: false
}

const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEEDBACK: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export const setFeedback = () => ({type: SET_FEEDBACK})

export const sendFeedback = (titleOfFeedback, contentOfFeedback) => {
    return (dispatch) => {
        apiFeedback.sendFeedback(titleOfFeedback, contentOfFeedback)
            .then(data => {
                dispatch(setFeedback())
            })
    }
}

export default feedbackReducer;


