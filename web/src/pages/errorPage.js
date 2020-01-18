import React from 'react';

import HomeAside from '../components/HomeAside';
import Erro from '../components/Erro';
import BadConnection from '../public/images/BadConnection.png';

const ErrorPage = ( { message } ) => {

  return (
    <div id="app">
      <HomeAside disabled={true}/>
      <Erro message={message}/>
    </div>
  )
}

export default ErrorPage;