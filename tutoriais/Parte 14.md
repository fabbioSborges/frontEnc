1. Index.js

```Javascript
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import {MdNotifications} from 'react-icons/md'

import {parseISO, formatDistance} from 'date-fns'
import pt from 'date-fns/locale/pt'

import 'react-perfect-scrollbar/dist/css/styles.css';

import {Container,Scroll, ListaNotificaoes, Notificaoes, Badge} from './styles'
import api from '../../services/api'

function Notificao(){
  const [visivel, setVisiviel] = useState(false)
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(()=>{
      async function carregarNotificacao(){
        const response = await api.get('notificacoes');
        //setNotificacoes(response.data);
        const data = response.data.map(notificacoes => {
          return {
            ...notificacoes,
            timeDistance: formatDistance(
              parseISO(notificacoes.createdAt),
              new Date(),
              {addSuffix: true, locale: pt}
            )
          }
        })
        console.log(data);
        setNotificacoes(data);

      }

      carregarNotificacao();
  }, [])

  const FuncaoVisivel = useCallback(() => {
    setVisiviel(!visivel);
  }, [visivel])

  const marcarComoLida = useCallback((id)=>{
    api.put(`notificacoes/${id}`)
    setNotificacoes(
      notificacoes.map(notificacao =>
        notificacao._id == id ? {...notificacao, read: true} : notificacao
      )
    )
  }, [notificacoes])

  const temNotificacao = useMemo(()=>
    !notificacoes.find(notificacao => Notificao.read == false)
  , [notificacoes])

  return (
    <Container>
      <Badge onClick={FuncaoVisivel} hasUnread={temNotificacao}>
        <MdNotifications size={30}>

        </MdNotifications>
      </Badge>

      <ListaNotificaoes visivel={visivel}>
        <Scroll>
          {notificacoes.map(notificacao => {
            return (
            <Notificaoes key={notificacao._id} unread={!notificacao.read}>
            <p>{notificacao.content}</p>
            <time>{notificacao.timeDistance}</time>
            {!notificacao.read && (
              <button type="button" onClick={() => marcarComoLida(notificacao._id)}> marcar como lida</button>
            )}</Notificaoes>
            )
          })}
        </Scroll>
      </ListaNotificaoes>

    </Container>
   );
}

export default Notificao;
```

2. Styles

```javascript
import styled, { css } from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";

export const Container = styled.div`
  margin-right: 10px;
`;

export const Badge = styled.button`
  //background:none;
  background: transparent;
  border: 0;
  position: absolute;
  left: calc(100% - 75px);
  top: calc(20% + 5px);
  ${(props) =>
    props.hasUnread &&
    css`
      ::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #f45f;
        content: "";
        border-radius: 50%;
      }
    `}
`;

export const Notificaoes = styled.div`
  color: #fff;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
  }
  p {
    font-size: 12px;
    line-height: 18px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    background: transparent;
    border: 0;
    font-size: 12px;
    color: #f45f;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.6);
  }
  ${(props) =>
    props.unread &&
    css`
      ::after {
        width: 8px;
        height: 8px;
        background: #f45f;
        content: "";
        border-radius: 50%;
        display: inline-block;
      }
    `}
`;

export const ListaNotificaoes = styled.div`
  position: absolute;
  width: 260px;
  left: calc(90% - 100px);
  top: calc(50% + 10px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 10px 15px;
  display: ${(props) => (props.visivel ? "block" : "none")};

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 10px 15px;
`;
```
