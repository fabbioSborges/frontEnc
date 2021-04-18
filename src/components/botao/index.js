import React from 'react'

import {Container} from './styles'

function Botao({children, ...rest}){
  return (
    <Container {...rest}> {children} </Container>
  );
}

export default Botao; 