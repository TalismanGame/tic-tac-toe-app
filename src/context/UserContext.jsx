//This component is the one that will hold the logic for getting the value of the context (user) and giving it to the UserContext.Provider
import React, { createContext, useState, useEffect } from "react";


const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState({
    name: '',
    age: 0
  });

  // fetch a user from a fake backend API

  useEffect(() => {
    setUser({
      name: 'Audrey',
      age: 26
    })
  }, [])

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider }; 
