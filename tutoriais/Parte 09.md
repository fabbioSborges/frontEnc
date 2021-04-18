# rotas

1. Criar a pasta de rotas

2. Criar o index.js

```javascript
import React from "react";

import { Switch } from "react-router-dom";
import Cadastro from "../pages/cadastro/index";
import Dashboard from "../pages/Dashboard";

import Route from "./Route";

function Rotas() {
  return (
    <Switch>
      <Route path="/" exact component={Cadastro}></Route>
      <Route path="/dashboard" isPrivate={true} component={Dashboard}></Route>
    </Switch>
  );
}

export default Rotas;
```

3. Criar o route.js

```javascript
import React from "react";
import { useAuth } from "../context/AuthContextt";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { user } = useAuth();
  console.log(user);
  console.log(isPrivate);
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
```

4. Alterar o app.js

```javascript
import GlobalStyled from "./styles/global";

import Login from "./pages/login";

import { AutenticacaoProvider } from "./hooks/autenticacao";
import { MensagemProvider } from "./hooks/mensagem";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AutenticacaoProvider>
          <MensagemProvider>
            <Rotas />
          </MensagemProvider>
        </AutenticacaoProvider>
        <GlobalStyled />
      </BrowserRouter>
    </>
  );
}

export default App;
```
