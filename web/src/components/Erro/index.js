import React from 'react';

import HomeAside from '../HomeAside';
import BadConnection from '../../public/images/BadConnection.png';
import './styles.css'

const Erro = ( { message } ) => {
  return (
    <div id="container">
      {message.image? <img src={BadConnection} /> : null }
      <div id="messageError">{message.message}</div>
    </div>
  )
}

export default Erro;