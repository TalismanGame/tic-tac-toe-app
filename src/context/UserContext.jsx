//This component is the one that will hold the logic for getting the value of the context (user) and giving it to the UserContext.Provider
import React, { createContext, useState } from "react";


const defaultUserObj = {
  username: '',
  email: '',
  isLoggedIn: false
}

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const { localStorage } = window
  let myStoredUserInfo = localStorage.getItem('user')

  // the value that will be given to the context
  const [user, updateUser] = useState(myStoredUserInfo ? JSON.parse(myStoredUserInfo) : defaultUserObj);

  const updateUserInfo = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
    updateUser(data)
  }

  // fetch a user from a fake backend API
  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider 
      value={{
        userInfo: user, 
        updateUserInfo
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider }; 
