import React, {createContext, useCallback, useContext, useState} from 'react';
import {uuid} from 'uuidv4'
import MensagemContainer from '../components/mensagem';

const MensagemContext = createContext({});
  
export const MensagemProvider = ({children})=>{
  const [mensagens, setMensagens] = useState([]);

  const adicionar = useCallback(({tipo, titulo, descricao})=>{
    const id = uuid();
    const mensagem = {
      id: id, 
      tipo: tipo, 
      titulo: titulo, 
      descricao: descricao,
    }

    setMensagens([...mensagens, mensagem])

  }, [mensagens]);

  const removeMensagem = useCallback((id)=>{
    setMensagens(state => state.filter(toast=>toast.id !== id))
  }, []);
  

  return (
    <MensagemContext.Provider value = {{adicionar, removeMensagem}}> 
      {children}
      <MensagemContainer mensagens ={mensagens}/>
    </MensagemContext.Provider>
  );
}

export function useMensagem(){
  const context = useContext(MensagemContext);
  if(!context){
    throw new Error("use toast denMensagemContexttro do componente ToastProvider")
  }

  return context;
}
