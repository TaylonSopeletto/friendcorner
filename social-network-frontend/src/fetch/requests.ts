import axios from 'axios'

const getToken = () => {
    if(typeof window !== 'undefined') return localStorage.getItem('@key')
}

export const listRequests = () => {
    const request = axios({
        url: 'http://localhost:4000',
        method: 'POST',
        headers: {
            'authorization': getToken()
        },
        data: {
            query:`
            {
                requests{
                  sender{
                    username
                    profileImage,
                    id
                  }
                }
              }
            `
        }
    })

    return request
}

export const acceptRequest = ({senderId}) => {
    const request = axios({
      url: 'http://localhost:4000',
      method: 'POST',
      headers: {
        'authorization': getToken()
      },
      data: {
          query: `
          mutation{
            acceptRequest(senderId: ${senderId})
          }
          
          `
      }
  })

  return request
}

export const createRequest = ({receiverId}) => {
  const request = axios({
    url: 'http://localhost:4000',
    method: 'POST',
    headers: {
      'authorization': getToken()
    },
    data: {
        query: `
        mutation{
          createRequest(id: ${receiverId}){
            sender{
              username
            }
          }
        }
        `
    }
})

return request
}