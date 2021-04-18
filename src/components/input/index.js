import React, { useEffect, useRef } from 'react'

import {Container, Erro} from './styles'
import {useField} from '@unform/core'

function Input({name, icon:Icon, ...rest}){
  const inputRef = useRef(null);
  const {fieldName, defaultValue, error, registerField} = useField(name)

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref: inputRef.current,
      path: 'value', 
    })
  }, [fieldName, registerField])

  return (
    <>
      <Container temErro={!!error}>
        {Icon && <Icon size="20"/>}
        <input 
          ref={inputRef} 
          defaultValue={defaultValue} 
          {...rest}/>
      </Container>
      <Erro>
        {error}
      </Erro>
      
    </>
  );
}

export default Input; 