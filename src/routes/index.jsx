import React, {useState} from 'react'
import {
    Routes,
    Route,
    Redirect,
} from "react-router-dom"

import MainBoard from '../screens/MainBoard'
import Home from '../screens/Home'
import CreateGame from '../screens/CreateGame'
import WaitingRoom from '../screens/WaitingRoom'
import NotFoundPage from '../screens/NotFoundPage'
import PrivateRoute from './PrivateRouts'

const CustomRouter = props => {
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Home />}
      />
      <Route 
        path="/create-game/*" 
        element={
          <PrivateRoute>
            <CreateGame />
          </PrivateRoute>
        }
      />
      <Route 
        path="/waiting-room/" 
        element={
          <PrivateRoute>
            <WaitingRoom />
          </PrivateRoute>
        }
      />
      <Route 
        path="/board/*" 
        element={
          <PrivateRoute>
            <MainBoard />
          </PrivateRoute>
        }
      />
      <Route 
        path="/404" 
        element={<NotFoundPage />}
      />
    </Routes>
  )
}

export default CustomRouter