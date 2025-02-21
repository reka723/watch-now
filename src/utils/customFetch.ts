import axios from "axios";

const authUrl = 'https://dummyjson.com/auth'
const moviesUrl = 'https://streaming-availability.p.rapidapi.com'

export const customAuthFetch = axios.create({ baseURL: authUrl })
export const customFetch = axios.create({
    baseURL: moviesUrl, headers: {
        'x-rapidapi-key': 'bb8f06ff41msha7485f8c5719b52p171b31jsn8fb9e336494e',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
    },
    params: { country: 'hu' }
})