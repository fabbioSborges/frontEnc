import React, {useCallback, useRef, useState} from 'react'

import logo from '../../assets/logo.svg'
import {Container} from './styles'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import Botao from '../../components/botao'
import Input from '../../components/input'
import {Form} from '@unform/web'
import * as Yup from 'yup'
import {useAutenticacao} from '../../hooks/autenticacao'
import {useMensagem} from '../../hooks/mensagem'
import { useHistory } from 'react-router'


function Login(){
  const formRef = useRef(null)
  const {login} = useAutenticacao();
  const {adicionar} = useMensagem();
  const history = useHistory();

  const submeterFormulario = useCallback(async (data)=>{
    try{
      const schema = Yup.object().shape({
        email: Yup.string().email("Email incorreto").required("email não informado"),
        senha: Yup.string().required("Senha não informada"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await login(data);

      adicionar({
        titulo:"Login realizado com sucesso",
        tipo: "sucesso",
        descricao:""
      })

      history.push('/dashboard');

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const erros = {};
        err.inner.forEach(error => {
          erros[error.path] = error.message;
        })
        console.log(erros);
        formRef.current?.setErrors(erros) 
        return;
      }
      adicionar({
        titulo:"Erro na autenticacao",
        tipo: "erro",
        descricao:"Ocorreu um erro no login"
      })
    }
  }, [login, adicionar, history]);

  return (
    <Container>
      <img src={logo} size="10" alt="logo"/> 
      <Form ref={formRef} onSubmit={submeterFormulario}>
        <h1>Login</h1>
        <Input name="email" icon={FiMail} placeholder="Seu Email"/>
        <Input name="senha" icon={FiLock} type="password" placeholder="Sua senha"/>
        <Botao type="submit">Login</Botao>
        <a href="">Esqueceu sua senha</a>
      </Form>
      <a href="">Realizar cadastro</a>
    </Container>
  )
}

export default Login;