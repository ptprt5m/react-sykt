import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3acfe84f-34a1-48d7-b77e-23fde0160776"
    }
})

export const authAPI = {
    getUserAuth() {
        return instance.get(`auth/me`)
            .then(responsive => responsive.data)
    },
    userLogin(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
            .then(responsive => responsive.data)
    },
    userLogout() {
        return instance.delete('auth/login')
            .then(responsive => responsive.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
            .then(responsive => responsive.data)
    }
}