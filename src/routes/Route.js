import React from 'react';
import {useAutenticacao} from '../hooks/autenticacao'
import {Route as ReactDOMRoute, Redirect} from 'react-router-dom'

function Route({isPrivate = false, component: Component, ...rest}){
  const {user} = useAutenticacao();
  console.log(user)
  console.log(isPrivate)
   return <ReactDOMRoute {...rest} 
          render={({location})=> {
            return isPrivate === !!user ? (
              <Component/>
            ):(
              <Redirect to={{
                pathname: isPrivate ? '/': '/dashboard',
                state:{from:location},
              }}/>
            )
          }}/> 
}

export default Route;