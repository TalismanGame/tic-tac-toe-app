import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom"
import { routes } from '../constants/routes'
import { connect } from 'react-redux'

const CustomRouter = ({isAuthenticated , ...props}) => {
  const location = useLocation()
  


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

export default connect(state => ({isAuthenticated: state.general.isAuthenticated}))(CustomRouter)


{/* <Redirect
          key={index}
          to={{
            pathname: "/",
            
          }}
        /> */}