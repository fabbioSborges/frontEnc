import React from 'react';

import {Switch} from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'

import Route from './Route'

function Rotas(){
  return (
    <Switch>
      <Route path='/' exact component={Login}></Route>
      <Route path='/dashboard' isPrivate={true} component={Dashboard}></Route>
    </Switch>
  )
}

export default Rotas;