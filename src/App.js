import GlobalStyled from './styles/global'

import {AutenticacaoProvider} from './hooks/autenticacao'
import {MensagemProvider} from './hooks/mensagem'
import {BrowserRouter} from 'react-router-dom'
import Rotas from './routes'


function App(){
  return (
    <>
    <BrowserRouter>
      <AutenticacaoProvider>
          <MensagemProvider>
            <Rotas/>
          </MensagemProvider>
      </AutenticacaoProvider>
      <GlobalStyled/>
    </BrowserRouter>
    </>
    
  )
}

export default App;