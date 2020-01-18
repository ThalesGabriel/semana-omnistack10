import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './styles.css'

import HomeAside from '../components/HomeAside';
import HomeMain from '../components/HomeMain';
import ErrorPage from './errorPage';
import api from '../services/api';

const Home = () => {

  const [devs, setDevs] = useState([]);
  const [message, setMessage] = useState({});

  function isDevs(lista) {
    return lista.length > 0;
  }

  useEffect(() => { 
    async function loadDevs(){
      try {
        const response = await axios.get('http://localhost:3001/devs');
        setDevs(response.data);
        
        if(!isDevs(response.data)) {
          setMessage({message: 'Ainda não existem devs cadastrados, cadastre-se agora mesmo!', code: 0, image: false})
        }
      } catch {
        setMessage({message: 'A base de dados se encontra desligada', code: 1, image: true})
      } 
    }
    loadDevs();
  }, [])

  async function handleUpdateDev(d, id) {
    const response = await api.put(`/dev/update/${id}`, d)

    loadDevs()
  }

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

  if(message.message) {
    return ( <ErrorPage message={message} /> )
  }

  return (
    
    <div id="app">
      <HomeAside onSubmitDev={handleAddDev} disabled={false}/>
      <HomeMain id="main" devs={devs} onDeleteDev={handleDeleteDev} handleUpdateDev={handleUpdateDev}/>
    </div>
  )
}

export default Home;

