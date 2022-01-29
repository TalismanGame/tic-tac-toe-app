import React, { createContext, useState } from 'react'
import { gameStatus } from '../constants'

const defaultGameDetails = {
    status: gameStatus[0],
}

const GameContext = createContext();

const GameContextProvider = ({children}) => {
    const { localStorage } = window
    let myStoredGameInfo = localStorage.getItem('game')

    const [game, updateGame] = useState(myStoredGameInfo ? JSON.parse(myStoredGameInfo) : defaultGameDetails)

    const updateGameInfo = (data) => {
        localStorage.setItem('game', JSON.stringify(data))
        updateGame(data)
    }

    return (
        <UserContext.Provider 
        value={{
            userInfo: user, 
            updateUserInfo
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export { GameContext, GameContextProvider }


