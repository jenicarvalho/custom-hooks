import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'

function Routes() {

  return(
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/dashboard" exact component={Dashboard}/>
    </Switch>
  )
}

export default Routes