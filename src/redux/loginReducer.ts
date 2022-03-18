import {authAPI, securityAPI} from "../api/apiLogin";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'login/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'login/GET-CAPTCHA-URL-SUCCESS';

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}
let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const loginReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetUserDataActionPayloadType
}
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

type SetCaptchaUrlActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

export const getAuthUser = () => async (dispatch: any) => {
    let response = await authAPI.getUserAuth()

    if (response.resultCode === 0) {
        let {id, email, login} = response.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const userLogin = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
    let response = await authAPI.userLogin(email, password, rememberMe, captcha)

    if (response.resultCode === 0) {
        dispatch(getAuthUser())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        // let messages = response.messages.length > 0 ? response.messages[0] : 'Common Error!'
        // dispatch(stopSubmit('login', {_error: messages}))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url

    dispatch(setCaptchaUrl(captchaUrl))
}

export const userLogout = () => async (dispatch: any) => {
    let response = await authAPI.userLogout()

    if (response.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default loginReducer;