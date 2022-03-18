import {apiFeedback} from "../api/apiFeedback";

const SET_FEEDBACK = 'app/SET-INITIALIZED';

type InitialStateType = {
    initialized: boolean
}
let initialState: InitialStateType = {
    initialized: false
}

const feedbackReducer = (state = initialState, action: any): InitialStateType => {
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

type SetFeedbackActionType = {
    type: typeof SET_FEEDBACK
}
export const setFeedback = (): SetFeedbackActionType => ({type: SET_FEEDBACK})

// export const sendFeedback = (titleOfFeedback: any, contentOfFeedback: any) => {
//     return (dispatch: any) => {
//         apiFeedback.sendFeedback(titleOfFeedback, contentOfFeedback)
//             .then(data => {
//                 dispatch(setFeedback())
//             })
//     }
// }

export default feedbackReducer;


