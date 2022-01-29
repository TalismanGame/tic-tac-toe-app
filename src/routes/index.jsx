import React, {useState} from 'react'
import {
    Routes,
    Route,
    Redirect,
} from "react-router-dom"

import MainBoard from '../screens/MainBoard'
import Home from '../screens/Home'
import CreateGame from '../screens/CreateGame'
import NotFoundPage from '../screens/NotFoundPage'
import { GameContextProvider } from "../context/UserContext";

const CustomRouter = props => {
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />}
      />
      <Route 
        path="/create-game/*" 
        element={<CreateGame />}
      />
      <Route 
        path="/board/*" 
        element={<MainBoard />}
      />
      <Route 
        path="/404" 
        element={<NotFoundPage />}
      />
    </Routes>
  )
}

export default CustomRouter