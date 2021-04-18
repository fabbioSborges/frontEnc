# Criar a página de login

1. Criar uma pasta pages

2. Adicionar uma pasta login

3. Adicionar icons react
   `yarn add react-icons`

4. Criar o arquivo index.js

```javascript
import React from "react";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

function Login() {
  return (
    <Container>
      <img src={logo} size="10" alt="logo" />
      <form>
        <h1>Login</h1>
        <div>
          <FiMail size="20"></FiMail>
          <input placeholder="Seu Email" />
        </div>
        <div>
          <FiLock size="20"></FiLock>
          <input type="password" placeholder="Sua Senha" />
        </div>

        <button>Login</button>
        <a href="">Esqueceu sua senha</a>
      </form>
      <a href="">Realizar cadastro</a>
    </Container>
  );
}

export default Login;
```

5. Criar o arquivo styles.js

```javascript
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  position: absolute;
  width: 300px;
  height: 476px;
  left: 490px;
  top: 300px;
  Form {
    margin-top: 50px;
    align-content: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
    text-align: center;
    h1 {
      margin-bottom: 30px;
    }
    div {
      border: 1px solid #ffffff;
      width: 100%;
      border-radius: 4px;
      box-sizing: border-box;
      height: 50px;
      margin-bottom: 10px;
      display: flex;
      svg {
        margin: 10px 15px 20px 10px;
      }
      input {
        flex: 1;
        border: 0;
        background: transparent;
        color: #fff;
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #fff;
        }
      }
    }
    button {
      background: #fff;
      color: #2148c0;
      border-radius: 4px;
      text-align: center;
      font-size: 22px;
      height: 50px;
      width: 100%;
      margin: 4px;
      font-weight: 500;
      transition: background-color 0.2s;
      &:hover {
        background: #ff9000;
      }
    }

    a {
      margin-top: 10px;
      color: #fff;
    }
  }
  a {
    color: #fff;
    text-align: center;
  }
`;
```
