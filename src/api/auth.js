import fetchAPI  from './'

export const registerUser = async payload => {
    return await fetchAPI({ url: '/auth/register/', method: 'POST', data: payload })
}

export const loginUser = async payload => {
    return await fetchAPI({ url: '/auth/login/', method: 'POST', data: payload })
}

