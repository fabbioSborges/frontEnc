import styled, {css}from 'styled-components'
import PerfectScrollBar from 'react-perfect-scrollbar'

export const Container = styled.div`
  margin-right:10px;

`; 

export const Badge = styled.button`
  //background:none;
  background:transparent;
  border: 0;
  position: absolute;
  left: calc(100% - 75px);
  top: calc(20% + 5px);
  ${props=>props.hasUnread && css`
    ::after{
      position:absolute;
      right:0;
      top:0;
      width:8px;
      height: 8px;
      background: #f45f;
      content: '';
      border-radius: 50%;
    }
  ` }

`; 

export const Notificaoes = styled.div`
  color: #fff;
  &+ div{
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255,255,255, 0.6);
  }
  p{
    font-size: 12px;
    line-height:18px;
  }
  time{
    font-size: 12px;
    opacity: 0.6;
  }
  button{

    background:transparent;
    border: 0;
    font-size: 12px;
    color: #f45f;
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255,255,255, 0.6)
  }
  ${props => props.unread && css`
    ::after{
        width:8px;
        height: 8px;
        background: #f45f;
        content: '';
        border-radius: 50%;
        display: inline-block;
      }
  `}
`;



export const ListaNotificaoes = styled.div`
  position:absolute;
  width: 260px;
  left: calc(90% - 100px);
  top: calc(50% + 10px);
  background: rgba(0,0,0,0.6);
  border-radius: 4px;
  padding: 10px 15px;
  display: ${props => (props.visivel? 'block':'none')};

  &::before{
    content:'';
    position:absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height:0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0,0,0,0.6);;
  }
`;


export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 10px 15px;
`;
