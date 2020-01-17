import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './styles.css'

import HomeAside from '../components/HomeAside';
import HomeMain from '../components/HomeMain';
import api from '../services/api';

const Home = () => {

  const [devs, setDevs] = useState([]);

  useEffect(() => { 
    async function loadDevs(){
      const response = await axios.get('http://localhost:3001/devs');
    
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(dev) {
    const response = await axios.post('http://localhost:3001/devs', { ...dev })
    
    setDevs([...devs, response.data])
  }

  async function loadDevs(){
    const response = await axios.get('http://localhost:3001/devs');
  
    setDevs(response.data);
  }

  async function handleDeleteDev(github_user) {
    await axios.post('http://localhost:3001/dev/delete', { github_user })
    
    await loadDevs()
  }

  return (
    <div id="app">
      <HomeAside onSubmitDev={handleAddDev}/>
      <HomeMain id="main" devs={devs} onDeleteDev={handleDeleteDev}/>
    </div>
  )
}

export default Home;

