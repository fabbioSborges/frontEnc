import React, { useEffect, useState } from 'react'

import {MdNotifications} from 'react-icons/md'

import {parseISO} from 'date-fns'


import 'react-perfect-scrollbar/dist/css/styles.css';

import {Container,Scroll, ListaNotificaoes, Notificaoes, Badge} from './styles'
import api from '../../services/api'

function Notificao(){
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(()=>{
      async function carregarNotificacao(){
        const response = await api.get('notificacoes');
        setNotificacoes(response.data);
        
        console.log(response.data);
      }
    
      carregarNotificacao();
  }, [])



  return (
    <Container> 
      <Badge hasUnread={true}>
        <MdNotifications>

        </MdNotifications>
      </Badge>
         
      <ListaNotificaoes>
        <Scroll>
          {notificacoes.map(notificacao => {
            return (
            <Notificaoes key={notificacao._id} unread={!notificacao.read}>
            <p>{notificacao.content}</p>
            <time>Há dois dias</time>
            <button type="button"> marcar como lida</button>
            </Notificaoes>
            )
          })}
        </Scroll>
      </ListaNotificaoes>
        
    </Container>
   );
}

export default Notificao; 