import axios from 'axios';
import {baseURL} from '../constants/api'

const axiosClient = axios.create();

axiosClient.defaults.baseURL = baseURL;

axiosClient.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

axiosClient.defaults.timeout = 2000;

axiosClient.defaults.withCredentials = true;


export function getRequest(URL) {
    return axiosClient.get(`/${URL}`).then(response => response);
}

export function postRequest(URL, payload) {
    return axiosClient.post(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
    return axiosClient.patch(`/${URL}`, payload).then(response => response);
}
  
export function deleteRequest(URL) {
    return axiosClient.delete(`/${URL}`).then(response => response);
}