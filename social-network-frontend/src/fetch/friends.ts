import axios from 'axios'
import { getUrl } from './baseUrl'

export const listFriends = ({ username }) => {
    const request = axios({
        url: getUrl(),
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