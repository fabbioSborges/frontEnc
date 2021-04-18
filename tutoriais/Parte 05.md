# formulario

1. Adicinar unform
   `yarn add @unform/web`
   `yarn add @unform/core`

2. Alterar arquivo login/index.js

```javascript
import React, { useCallback, useRef } from "react";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Botao from "../../components/botao";
import Input from "../../components/input";
import { Form } from "@unform/web";

function Login() {
  const formRef = useRef(null);

  const submeterFormulario = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <img src={logo} size="10" alt="logo" />
      <Form ref={formRef} onSubmit={submeterFormulario}>
        <h1>Login</h1>
        <Input name="email" icon={FiMail} placeholder="Seu Email" />
        <Input
          name="senha"
          icon={FiLock}
          type="password"
          placeholder="Seu Email"
        />
        <Botao type="submit">Login</Botao>
        <a href="">Esqueceu sua senha</a>
      </Form>
      <a href="">Realizar cadastro</a>
    </Container>
  );
}

export default Login;
```

3. Alterar input/index.js

```javascript
import React, { useEffect, useRef } from "react";

import { Container } from "./styles";
import { useField } from "@unform/core";

function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {Icon && <Icon size="20" />}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export default Input;
```
