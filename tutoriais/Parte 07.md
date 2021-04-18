# Contexto

Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value do<MyContext.Provider>mais próximo acima do componente de chamada na árvore.

1. Adicionar o axios
   `yarn add axios`

2. Criar a pasta services com o arquivo api.js

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3121",
});

export default api;
```

3. Criar a pasta hooks com o arquivo autenticacao.js

```javascript
import React, { createContext, useContext } from "react";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  return (
    <ContextoAutenticacao.Provider value={{}}>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export function useAutenticacao() {
  const context = useContext(ContextoAutenticacao);
  if (!context) {
    throw new Error("use Auth");
  }

  return context;
}
```

4. Alterar a função AutenticacaoProvider

```javascript
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

```

5. Alterar o login/index.js

```javascript
import React, { useCallback, useRef } from "react";

import logo from "../../assets/logo.svg";
import { Container } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Botao from "../../components/botao";
import Input from "../../components/input";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { useAutenticacao } from "../../hooks/autenticacao";

function Login() {
  const formRef = useRef(null);
  const { login } = useAutenticacao();

  const submeterFormulario = useCallback(
    async (data) => {
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

        await login(data);
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
      }
    },
    [login]
  );

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

6. Alterar o app.js

```javascript
import GlobalStyled from "./styles/global";

import Login from "./pages/login";

import { AutenticacaoProvider } from "./hooks/autenticacao";

function App() {
  return (
    <>
      <AutenticacaoProvider>
        <Login></Login>
      </AutenticacaoProvider>
      <GlobalStyled />
    </>
  );
}

export default App;
```
