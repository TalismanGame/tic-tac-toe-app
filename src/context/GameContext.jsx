import React, { createContext, useState, useEffect } from 'react'
import { gameStatus } from '../constants'

const defaultGameDetails = {
    status: gameStatus[0],
    generatedCode: undefined,
    inviteCode: ''
}

const GameContext = createContext();

const GameContextProvider = ({children}) => {
    const { localStorage } = window
    let myStoredGameInfo = localStorage.getItem('game')

    const [game, setGame] = useState(myStoredGameInfo ? JSON.parse(myStoredGameInfo) : defaultGameDetails)

    const updateGame = (data) => {
        localStorage.setItem('game', JSON.stringify(data))
        setGame(data)
    }

    return (
        <GameContext.Provider 
            value={{
                game, 
                updateGame
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

export { GameContext, GameContextProvider }


