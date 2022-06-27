import axios from 'axios';
import {baseURL} from '../constants/api'

const fetchAPI = function ({ url, method, data, hasFile, forcedToken, version, config, headers }) {
    return new Promise((resolve, reject) => {
        let defaultConfig = {
            method: method || 'GET',
            url: (baseURL + url),
            headers: {
                'Content-Type': hasFile ? 'multipart/form-data' : 'application/json',
                ...headers
            },
            ...config
        }
        const token = window.localStorage.getItem('token')

        if (token) {
            defaultConfig.headers.Authorization = 'Token ' + token || ''
        }

        if (hasFile) {
            const formData = new FormData()

            for (let key in data) {
                formData.append(key, data[key])
            }
            defaultConfig.data = formData
        } else if (data) {
            defaultConfig.data = data
        }

        axios(defaultConfig)
            .then(res => {
                // const { status, statusText, data } = res
                resolve(res)
            })
            .catch(error => {
                console.log(error.response);
                if (error.hasOwnProperty('response')) {
                    // const { status, statusText, data } = error.response
                    reject({ error, ...error.response })
                } else reject({ error })
            })
    })
}

export default fetchAPI








//************************************************************** my own version **************************************************************
// const axiosClient = axios.create();

// axiosClient.defaults.baseURL = baseURL;

// axiosClient.defaults.headers = {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
// };

// axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;


// export function getRequest(URL) {
//     return axiosClient.get(`/${URL}`)
//     .then(response => response)
//     .catch(e => e)
// }

// export async function postRequest(URL, payload) {
//     new Promise((resolve, reject) => {
//         try{
//             let res = await axiosClient.post(`/${URL}`, payload)
//             resolve(res)
//         }catch(e){
//             resolve(e)
//         }
//     })
// }

// export function patchRequest(URL, payload) {
//     return axiosClient.patch(`/${URL}`, payload)
//     .then(response => response)
//     .catch(e => e)
// }
  
// export function deleteRequest(URL) {
//     return axiosClient.delete(`/${URL}`)
//     .then(response => response)
//     .catch(e => e)
// }
//************************************************************** my own version **************************************************************
