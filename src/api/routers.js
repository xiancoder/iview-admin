import axios from 'axios'

export const getRouterReq = (access) => {
    return axios.request({
        url: 'get_router',
        params: {
            access
        },
        method: 'get'
    })
}
