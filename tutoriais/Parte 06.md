# erro em formulario

1. Instalar yup
   ` yarn add yup`

2. Alterar arquivo login/index

```javascript
import React, { useCallback, useRef } from "react";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Botao from "../../components/botao";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";

function Login() {
  const formRef = useRef(null);

  const submeterFormulario = useCallback(async (data) => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Email incorreto")
          .required("email não informado"),
        senha: Yup.string().required("Senha não informada"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = {};
        err.inner.forEach((error) => {
          erros[error.path] = error.message;
        });
        console.log(erros);
        formRef.current?.setErrors(erros);
        return;
      }

      //disparar um toast
    }
  }, []);

  return (
    <Container>
      <img src={logo} size="10" alt="logo" />
      <Form ref={formRef} onSubmit={submeterFormulario}>
        <h1>Login</h1>
        <Input
          name="senha"
          icon={FiLock}
          type="password"
          placeholder="Sua senha"
        />
        <Input name="email" icon={FiMail} placeholder="Seu Email" />
        <Botao type="submit">Login</Botao>
        <a href="">Esqueceu sua senha</a>
      </Form>
      <a href="">Realizar cadastro</a>
    </Container>
  );
}

export default Login;
```

3. Alterar o login/index.js

```javascript
import React, { useEffect, useRef, useState } from "react";

import { Container, Erro } from "./styles";
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
    <>
      <Container temErro={!!error}>
        {Icon && <Icon size="20" />}
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      </Container>
      <Erro>{error}</Erro>
    </>
  );
}

export default Input;
```

4. Alterar o style

```
  ${(props) => props.temErro && css`
        border-color: #f01f;
        color: #f01f;
  `}
```
