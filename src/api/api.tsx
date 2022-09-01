import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '01490dda-1694-49c7-b3cb-3b5b50a91426'}
})

export const usersAPI = {
    getUsers (currentPage: any, pageSize: any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: string) {
        console.warn('Obsolute method. Please profileAPI object.')
      return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get(`profile/`+ userId )
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/`+ userId )
    },
    updateStatus (status: string) {
        return instance.put(`profile/status/`)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}

