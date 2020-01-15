import React, { useEffect } from 'react'
import axios from 'axios';

import './styles.css'

import HomeAside from '../components/HomeAside';
import HomeMain from '../components/HomeMain';
import api from '../services/api';

const Home = () => {

  async function handleAddDev(dev) {

    const response = await axios.post('http://localhost:3001/devs', { ...dev })

    console.log(response.data)
    
  }

  return (
    <div id="app">
      <HomeAside onSubmitDev={handleAddDev}/>
      <HomeMain id="main"/>
    </div>
  )
}

export default Home;

