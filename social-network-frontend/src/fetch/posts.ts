import axios from 'axios'

const getToken = () => {
    if(typeof window !== 'undefined') return localStorage.getItem('@key')
}

export const mergePost = ({text}) => {

    const request = axios({
        url: 'http://localhost:4000',
        method: 'POST',
        headers: {
            'authorization': getToken()
        },
        data: {
            query: `
            mutation{
                createPost(text: "${text}"){
                  text
                }
            }
            `
        }
    })

    return request
}

export const listPost = () => {
    const request = axios({
        url: 'http://localhost:4000',
        method: 'POST',
        data: {
            query:`
            {
                posts{
                  text,
                  created_at,
                  profile{
                    username,
                    profileImage
                  }
                }
              }
            `
        }
    })

    return request
}

export const profilePosts = ({username}) => {
    const request = axios({
        url: 'http://localhost:4000',
        method: 'POST',
        data: {
            query:`
            {
                profilePosts(username: "${username}"){
                  text,
                  created_at,
                  profile{
                    username,
                    profileImage
                  }
                }
              }
            `
        }
    })

    return request
}

