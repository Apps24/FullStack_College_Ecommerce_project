import axios from "axios";


const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzAxMGY0OTQyYzg4ODgxOTUxZjUxOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTI0Njg5NywiZXhwIjoxNjM1NTA2MDk3fQ.Jw-zHRr5pANK4vhmVPsySPGun-fpkB-xJr-GAkgemL0"

export const publicRequest = axios.create({
    baseUrl: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})