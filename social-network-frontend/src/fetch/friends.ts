import axios from 'axios'

const getToken = () => {
    if (typeof window !== 'undefined') return localStorage.getItem('@key')
}

export const listFriends = ({ username }) => {
    const request = axios({
        url: 'https://friend-corner-back.herokuapp.com/',
        method: 'POST',
        data: {
            query: `
            {
                friends(username: "${username}"){
                  username,
                  profileImage
                }
              }
            `
        }
    })

    return request
}