import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import MainBoard from '../screens/MainBoard'
import Home from '../screens/Home'
import CreateGame from '../screens/CreateGame'


const CustomRouter = props => {
     return (
        <Switch>
            <Route exact path="/" children={<Home />} />
            <Route path="/board" children={<MainBoard />} />
            <Route path="/create-game" children={<CreateGame />} />
        </Switch>
     )
}

export default CustomRouter

