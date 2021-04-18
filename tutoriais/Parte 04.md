# Criando componentes estilizados

1.Criando pasta components

2. Criar o componente botao com arquivo index.js e style.js

   2.1. index.js

```javascript
import React from "react";

import { Container } from "./styles";

function Botao({ children, ...rest }) {
  return <Container {...rest}> {children} </Container>;
}

export default Botao;
```

2.2.style.js

```javascript
import styled from "styled-components";

export const Container = styled.button`
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
`;
```

3. Criar a pasta input com arquivo index.js e styles.js

   3.1 index.js

```javascript
import React from "react";

import { Container } from "./styles";

function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {<Icon size="20" />}
      <input {...rest} />
    </Container>
  );
}

export default Input;
```

3.2 styles.js

```javascript
import styled from "styled-components";

export const Container = styled.div`
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
`;
```

4. Alterar login

```javascript
import React from "react";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Botao from "../../components/botao";
import Input from "../../components/input";

function Login() {
  return (
    <Container>
      <img src={logo} size="10" alt="logo" />
      <form>
        <h1>Login</h1>
        <Input icon={FiMail} placeholder="Seu Email" />
        <Input icon={FiLock} type="password" placeholder="Seu Email" />
        <Botao type="submit">Login</Botao>
        <a href="">Esqueceu sua senha</a>
      </form>
      <a href="">Realizar cadastro</a>
    </Container>
  );
}

export default Login;
```
