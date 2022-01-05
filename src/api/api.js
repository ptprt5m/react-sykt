import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3acfe84f-34a1-48d7-b77e-23fde0160776"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responsive => responsive.data)
    },
    userUnfollow(userId)  {
        return instance.delete(`follow/${userId}`)
            .then(responsive => responsive.data)
    },
    userFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(responsive => responsive.data)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(responsive => responsive.data)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(responsive => responsive.data)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(responsive => responsive.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(responsive => responsive.data)
    },
    saveProfileData(profile) {
        return instance.put(`profile`, profile)
            .then(responsive => responsive.data)
    }
}

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

