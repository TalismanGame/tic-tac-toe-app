import React, { useContext } from 'react'

import { GameContext } from "../context/GameContext";

export const useGameContext = () => {
    // get the context
    const context = useContext(GameContext);
  
    // if `undefined`, throw an error
    if (context === undefined) {
      throw new Error("useGameContext was used outside of its Provider");
    }
  
    return context;
};