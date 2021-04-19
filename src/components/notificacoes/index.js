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