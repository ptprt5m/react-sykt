import {authAPI, securityAPI} from "../api/apiLogin";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'login/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'login/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUser = () => {
    return (dispatch) => {
        return authAPI.getUserAuth()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, email, login} = data.data
                        dispatch(setUserData(id, email, login, true))
                    }
                }
            );
    }
}

export const userLogin = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.userLogin(email, password, rememberMe, captcha)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(getAuthUser())
                    } else {
                        if (data.resultCode === 10) {
                            dispatch(getCaptchaUrl())
                        }
                        let messages = data.messages.length > 0 ? data.messages[0] : 'Common Error!'
                        dispatch(stopSubmit('login', {_error: messages}))
                    }
                }
            );
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl))
}

export const userLogout = () => {
    return (dispatch) => {
        authAPI.userLogout()
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setUserData(null, null, null, false))
                    }
                }
            );
    }
}

export default loginReducer;