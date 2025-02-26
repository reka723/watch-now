import axios from "axios"
import { userCredentials } from "./types"

const authUrl = '/api/auth'

export const authFetch = axios.create({ baseURL: authUrl, headers: { 'Content-Type': 'application/json', }, withCredentials: true })

export const login = async (data: userCredentials) => {
    try {
        const response = await authFetch.post('login', { ...data, expiresInMins: 5 })
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        return response.data
    } catch (error) {
        console.error("Login failed", error)
        throw error

    }
}

export const refreshToken = async () => {
    const data = { refreshToken: localStorage.getItem('accessToken') }
    if (!data.refreshToken) {
        throw new Error('No refresh token found')
    }
    try {
        const response = await authFetch.post('refresh', { data })
        return response.data
    } catch (error) {
        console.log('Error refreshing token', error)
        throw error

    }

}
