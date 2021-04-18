# Configurando estilo global

1. Adicionar styled.components
   `yarn add styled-components`

2. Criar uma pasta styles

3. Criar o arquivo global.js

   ```javascript
   import { createGlobalStyle } from "styled-components";

   import imagemFundo from "../assets/BG.png";

   export default createGlobalStyle`
     * {
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box
     }
   
     body{
       background: #2148C0 url(${imagemFundo}) no-repeat ;
       -webkit-font-smoothing: antialiased;
       color:#FFF;
       background-size: cover;
       background-attachment: fixed;
     }
   
     body, input, button{
       font: 16px,Roboto, sans-serif;
     }
   
     button{
       cursor: pointer
     }
   
   `;
   ```

4. Adicionar o estilo global no app.js

```javascript
import GlobalStyled from "./styles/global";

function App() {
  return (
    <>
      <h1>Teste</h1>
      <GlobalStyled />
    </>
  );
}

export default App;
```
