import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 0;
  //background: #264ECA;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #58e;
  
 `; 

export const Conteudo = styled.div`
  
  max-width: 1120px;
  margin: 0;
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
  margin-left: 400px;
  margin-right: 10px;

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

