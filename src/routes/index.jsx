import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom"
import { routes } from '../constants/routes'

const CustomRouter = props => {

  return (
    <Switch>
      {routes
        .map((route, index) => 
          <Route
            key={index} 
            exact={route.exact} 
            path={route.path} 
            children={route.children}
          />
      )}
    </Switch>
  )
}

export default CustomRouter