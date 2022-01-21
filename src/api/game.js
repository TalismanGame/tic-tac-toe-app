import fetchAPI  from './'

export const createNewGame = async () => {
    return await fetchAPI({ url: '/game/create-new', method: 'POST' })
}


