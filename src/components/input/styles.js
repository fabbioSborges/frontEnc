import styled, {css} from 'styled-components'

export const Container = styled.div`

    border: 1px solid #FFFFFF;
    width: 100% ;
    border-radius: 4px;
    box-sizing: border-box;
    height: 50px;
    margin-bottom:10px;
    display:flex;
  svg{
    margin:10px 15px 20px 10px;
  
  }
  ${(props) => props.temErro && css`
        border-color: #f01f; 
        color: #f01f;
  `}
  input{
    flex: 1;
    border: 0;
    background: transparent;
    color:#fff;     
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #fff;
    }
  }
    

`; 

export const Erro = styled.div`
  color: #f65f;
`;