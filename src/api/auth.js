import { getRequest, postRequest, patchRequest, deleteRequest } from './'



export const loginUser = async payload => {
    await postRequest('auth/register/', payload)
}

