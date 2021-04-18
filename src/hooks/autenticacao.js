import React, {createContext, useCallback, useContext, useState}from 'react'
  
import api from '../services/api.js';

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({children}) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@app:token');
    const user = localStorage.getItem('@app:user');
    if(token && user){
      api.defaults.headers.authorization = `Bearer ${token}`
      return ({token, user: JSON.parse(user)})
    }
    return {};
  }); 

  const login = useCallback (async ({email, senha }) => {
    console.log("autenticacao");
    console.log({email, senha })
    const response = await api.post('sessions', {
      email, 
      password: senha
    });

    const {token, user} = response.data;

    localStorage.setItem('@app:token', token);
    localStorage.setItem('@app:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`
    
    setData({token, user});
    console.log({token, user})

  }, []);

  const logoff = useCallback(() => {
    localStorage.removeItem('@aplicacao:token');
    localStorage.removeItem('@aplicacao:user');

    setData({});
  },[])

  return (
    <ContextoAutenticacao.Provider value = {{user: data.user, login, logoff}}> 
      {children}
    </ContextoAutenticacao.Provider>
  );
}

export const useAutenticacao = () => {
  const context = useContext(ContextoAutenticacao);
    if(!context){
      throw new Error("use Auth")
    }

  return context;
}
