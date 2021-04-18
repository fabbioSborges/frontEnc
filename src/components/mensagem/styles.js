
import styled, {css} from 'styled-components'


const toasType = {
  info: css`
    
  background: #ebf8ff;
  color: #3172b7;
  `,
  sucesso: css`
    
    background: #e6ffaa;
    color: #2e656a ;
  `,

  erro: css`
    
  background: #fddede;
  color: #c53030;
  `,
}

export const Container = styled.div`
  position: absolute;
  padding:30px;
  right:0;
  top:0;
  overflow:hidden;
  
`;

export const Toast = styled.div`
  width:360px;
  position:relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);

  display: flex;

  & + div{
    margin-top:10px;
  }

  ${(props) => toasType[props.type]} 

  > svg{
    margin: 4px 12px 0 0;
  }

  div{
    flex:1;
    p{
      margin-top: 4px;
      font-size: 14px;
      opacity:0.8;
      line-height:20px;
    }
  }

  button{
    position:absolute;
    right: 8px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) => !props.descricao && css`
    align-items:center;
    svg{
      margin-top:0
    }
  `} 

`;

