import axios from "axios"

export const api = axios.create({
    baseURL: `https://hotel-api-s3.herokuapp.com`
})