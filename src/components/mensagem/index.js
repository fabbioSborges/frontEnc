import React, {useCallback} from 'react'

import {Container, Toast} from './styles'

import {FiAlertCircle, FiXCircle} from 'react-icons/fi'

import {useMensagem} from '../../hooks/mensagem'

function ContainerMensagem({mensagens}){
  const {removeMensagem} = useMensagem();

  return (
    <Container>
    {mensagens.map(mensagem => {
      return(
        <Toast key={mensagem.id} type={mensagem.tipo} descricao={!!mensagem.descricao}> 
        <FiAlertCircle size={20}/>
        <div>
          <strong>{mensagem.titulo}</strong>
          {mensagem.descricao && <p>{mensagem.descricao}</p>}
        </div>

        <button type="button" onClick={()=>removeMensagem(mensagem.id)}><FiXCircle size={18}/></button>
      </Toast>
      );
    })} 
      
    </Container>
  )
}

export default ContainerMensagem;