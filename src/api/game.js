import fetchAPI  from './'

export const createNewGame = async () => {
    return await fetchAPI({ url: '/game/create-new', method: 'POST' })
}

export const joinToGame = async inviteCode => {
    return await fetchAPI({ url: '/game/join', method: 'PUT', data: inviteCode })
}

export const getGameStatus = async inviteCode => {
    return await fetchAPI({url: `/game/status/${inviteCode}/`})
}

export const getGameDataApi = async inviteCode => {
    return await fetchAPI({url: `/game/data/${inviteCode}/`})
}


