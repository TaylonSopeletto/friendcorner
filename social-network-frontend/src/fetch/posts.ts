import axios from 'axios'
import { getUrl } from './baseUrl'

const getToken = () => {
  if (typeof window !== 'undefined') return localStorage.getItem('@key')
}

export const mergePost = ({ text }) => {

  const request = axios({
    url: getUrl(),
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
    url: getUrl(),
    method: 'POST',
    data: {
      query: `
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

export const profilePosts = ({ username }) => {
  const request = axios({
    url: getUrl(),
    method: 'POST',
    data: {
      query: `
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

