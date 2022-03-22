import axios from 'axios'
import {ProfileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3acfe84f-34a1-48d7-b77e-23fde0160776"
    }
})

export enum ResultCode {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type UsersGetUsersType = {
    id: number
    name: string
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersGetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(responsive => responsive.data)
    },
    userUnfollow(userId: number)  {
        return instance.delete(`follow/${userId}`)
            .then(responsive => responsive.data)
    },
    userFollow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(responsive => responsive.data)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(responsive => responsive.data)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
            .then(responsive => responsive.data)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
            .then(responsive => responsive.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(responsive => responsive.data)
    },
    saveProfileData(profile: ProfileType) {
        return instance.put(`profile`, profile)
            .then(responsive => responsive.data)
    }
}

type AuthMeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}

type AuthLoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCode | ResultCodeForCaptcha
    messages: Array<string>
}

type AuthLogoutResponseType = {
    data: Object
    resultCode: ResultCode
    messages: Array<string>
}

export const authAPI = {
    getUserAuth() {
        return instance.get<AuthMeResponseType>(`auth/me`)
            .then(responsive => responsive.data)
    },
    userLogin(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<AuthLoginResponseType>('auth/login', {email, password, rememberMe, captcha})
            .then(responsive => responsive.data)
    },
    userLogout() {
        return instance.delete<AuthLogoutResponseType>('auth/login')
            .then(responsive => responsive.data)
    }
}

type SecurityCaptchaUrlType = {
    url: string
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<SecurityCaptchaUrlType>('security/get-captcha-url')
            .then(responsive => responsive.data)
    }
}

