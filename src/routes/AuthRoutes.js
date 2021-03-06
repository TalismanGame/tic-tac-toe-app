import React from 'react'
import { useUserContext } from '../hooks/useUserContext'
import { Navigate } from 'react-router-dom'


const AuthRoutes = ({ children }) => {
    const user = useUserContext()
    const { isLoggedIn } = user.userInfo

    if(!isLoggedIn) return children
    else return <Navigate to="/create-game" />
}

export default AuthRoutes