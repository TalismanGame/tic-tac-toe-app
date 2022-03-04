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
import PrivateRoutes from './PrivateRoutes'
import AuthRoutes from './AuthRoutes'

const CustomRouter = props => {
  
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <AuthRoutes>
            <Home />
          </AuthRoutes>
        }
      />
      <Route 
        path="/home" 
        element={
          <AuthRoutes>
            <Home />
          </AuthRoutes>
        }
      />
      <Route 
        path="/create-game/*" 
        element={
          <PrivateRoutes>
            <CreateGame />
          </PrivateRoutes>
        }
      />
      <Route 
        path="/waiting-room/" 
        element={
          <PrivateRoutes>
            <WaitingRoom />
          </PrivateRoutes>
        }
      />
      <Route 
        path="/board/*" 
        element={
          <PrivateRoutes>
            <MainBoard />
          </PrivateRoutes>
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