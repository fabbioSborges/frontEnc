# Criando a página de dashboard]

1. Criar o componente cabeçalho

   1.1 index.js

```javascript
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { Container, Conteudo, Perfil } from "./styles";

import { useAutenticacao } from "../../hooks/autenticacao";
import { FiPower } from "react-icons/fi";

function Cabecalho() {
  const { logoff, user } = useAutenticacao();
  return (
    <Container>
      <Conteudo>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard"> App </Link>
        </nav>
        <Perfil>
          <img src={user.avatar.url} alt={`foto ${user.name}`} />
          <div>
            <span>Bem Vindo</span>
            <strong> {user.name}</strong>
          </div>
        </Perfil>
        <button type="button" onClick={logoff}>
          <FiPower />
        </button>
      </Conteudo>
    </Container>
  );
}

export default Cabecalho;
```

    1.2 Styled.js

    ```javascript

      import styled from 'styled-components'

      export const Container = styled.div`
        padding: 32px 0;
        background: #264ECA;

      `;

      export const Conteudo = styled.div`
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        nav{
          display:flex;
          align-items:center;
          > img{
            height:80px;
            margin-right: 20px;
          }

        }

        button{
          margin-left: auto;
          background:transparent;
          border:0;
          svg{
            color: #999592;
            width: 20px;
            height: 20px;

          }
        }


      `;


      export const Perfil = styled.aside`
        display:flex;
        align-items: center;
        margin-left: 80px;

        img{
          width: 56px;
          height: 56px;
          border-radius: 50%;
        }
        div{
          display: flex;
          flex-direction: column;
          margin-left: 16px;
          line-height: 24px;
        }
        span{
          color: #f4ede8;
        }
        strong{
          color:#ff9000;
        }
      `;


    ```

    2. Alterar o dashboard

    ``` javascript
          import React from 'react'
      import { FiClock } from 'react-icons/fi'

      import Cabecalho from '../../components/cabecalho'

      import {Container, Section, ProximoAgendamento, Agendamento, Conteudo, Agenda, Calendario} from './styles'

      function Dashboard(){
        return (
          <Container>
            <Cabecalho></Cabecalho>
            <Conteudo>
              <Agenda>
                <h1>Horarios Agendados</h1>
                <p>
                  <span>12 de Abril </span>
                  <span>segunda-feira</span>
                </p>
                <ProximoAgendamento>
                  <strong>Atendimento a Seguir</strong>
                  <div>
                    <img src="" alt="teste"></img>
                    <strong>Fabbio borges</strong>
                    <span>
                      <FiClock />
                      08:00
                    </span>
                  </div>
                </ProximoAgendamento>
                <Section>
                  <strong> Manhã </strong>
                    <Agendamento>
                      <span>
                        <FiClock> </FiClock>
                        08:00
                      </span>
                      <div>
                        <img src="" alt="foto usuario"/>
                        <strong>Pedro Augusto</strong>
                      </div>
                    </Agendamento>
                </Section>
                <Section>
                  <strong> Tarde </strong>
                    <Agendamento>
                      <span>
                        <FiClock> </FiClock>
                        09:00
                      </span>
                      <div>
                        <img src="" alt="fotoperfil" />
                        <strong>Nome usuario</strong>
                      </div>
                    </Agendamento>
                </Section>
              </Agenda>
              <Calendario>

              </Calendario>
            </Conteudo>
          </Container>
        )
      }

      export default Dashboard

````


3. Estilizando o dashboard
```javascript

import styled from 'styled-components'

export const Container = styled.div``;

export const Conteudo = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display:flex;
`;

export const Agenda = styled.div`
  flex:1;
  margin-right:120px;
  h1{
    font-size:36px;
  }
  p{
    margin-top: 8px;
    color:#fff;
    display:flex;
    align-items:center;
    font-weight: 400;

    span{
      display:flex;
      align-items:center;
    }
    span + span::before{
      content: '';
      width: 1px;
      height: 12px;
      background: #ff9000;
      margin: 0 8px;

    }
  }
`;

export const ProximoAgendamento= styled.div`
margin-top: 64px;
  > strong{
    color:#fff;
    font-size:20px;
    font-weight: 400;
  }
  div{
    background: #58ed;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position:relative;

    &::before{
      position: absolute;
      height: 80%;
      width: 1px;
      left:0;
      top:10%;
      content: '';
      background: #ff9000;
    }

    img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong{
      margin-left: 24px;
      color: #fff;
    }
    span{
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #fff;

      svg{
        color:#ff9000;
        margin-right: 8px;
      }
    }

  }
`;


export const Section = styled.section`
  margin-top: 48px;
  > strong{
    color: #fff;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Agendamento = styled.div`
  align-items: center;
      display: flex;
  & + div{
    margin-top: 16px;

  }
  span{
      margin-left: auto;
      display: flex;
      align-items: center;
      color: #f4ede8;

      svg{
        color:#ff9000;
        margin-right: 8px;
      }
  }

  div{
    flex:1;
    background: #58ed;;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;
    img{
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    strong{
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const Calendario= styled.div``;

````
