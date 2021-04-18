import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import {Container, Conteudo, Perfil} from './styles'

import {useAutenticacao} from '../../hooks/autenticacao'
import { FiPower } from 'react-icons/fi'
import Notificao from '../notificacoes'

function Cabecalho(){
  const {logoff, user} = useAutenticacao();
  return (
    <Container>
      <Conteudo>
        <nav>
          <img src={logo} alt="logo"/>
          <Link to='/dashboard'> App </Link>
        </nav>
        <Perfil>
          <img src={user.avatar.url} alt={`foto ${user.name}`}/>
          <div>
            <span>Bem Vindo</span>
            <strong> {user.name}</strong>
          </div>
        </Perfil>
        <button type="button" onClick={logoff}>
          <FiPower />
        </button>
      </Conteudo>
      <Notificao/>
    </Container> 
  );
}

export default Cabecalho; 