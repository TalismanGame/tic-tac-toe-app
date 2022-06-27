import React, { createContext, useState } from 'react'

const defaultGameDetails = {
    status: null,
    generatedCode: undefined,
    inviteCode: ''
}

const GameContext = createContext();
const GameContextProvider = ({children}) => {
    const { localStorage } = window
    let myStoredGameInfo = localStorage.getItem('game')
    const [game, setGame] = useState(myStoredGameInfo ? JSON.parse(myStoredGameInfo) : defaultGameDetails)

    //data here has a problem. not sure why but it does not come here first time. when i purge data in my dev console and do login again.
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


