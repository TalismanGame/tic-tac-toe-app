import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import MainBoard from '../screens/MainBoard'
import Home from '../screens/Home'


const CustomRouter = props => {
     return (
        <Switch>
            <Route exact path="/" children={<Home />} />
            <Route exact path="/board" children={<MainBoard />} />
        </Switch>
     )
}

export default CustomRouter

