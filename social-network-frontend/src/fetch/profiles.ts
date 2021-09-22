import axios from 'axios'
import { getUrl } from './baseUrl'

const getToken = () => {
    if (typeof window !== 'undefined') return localStorage.getItem('@key')
}

export const tokenProfile = () => {
    const request = axios({
        url: getUrl(),
        method: 'POST',
        headers: {
            'authorization': getToken()
        },
        data: {
            query: `
            {
                tokenProfile{
                  username,
                  profileImage,
                  id
                }
              }
            `
        }
    })

    return request
}

export const register = ({ username, password, email }) => {
    const request = axios({
        url: getUrl(),
        method: 'POST',
        data: {
            query: `
            mutation{
                createProfile(password: "${password}", email: "${email}", username: "${username}"){
                  username
                }
            }
            `
        }
    })

    return request
}

export const login = ({ password, email }) => {
    const request = axios({
        url: getUrl(),
        method: 'POST',
        data: {
            query: `
            mutation{
                login(password: "${password}", email: "${email}"){
                  jwtToken
                }
            }
            `
        }
    })

    return request
}