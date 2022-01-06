import React, { useContext } from 'react'

import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
    // get the context
    const context = useContext(UserContext);
  
    // if `undefined`, throw an error
    if (context === undefined) {
      throw new Error("useUserContext was used outside of its Provider");
    }
  
    return context;
};