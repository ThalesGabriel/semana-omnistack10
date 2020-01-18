import React, { useEffect, useState } from 'react';

import './styles.css';

const HomeAside = ( { onSubmitDev, disabled } ) => {

  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');
  const [ github_user, setGithub_user ] = useState('');
  const [ techs, setTechs ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 10000 
      }
    );
  }, [])

  function handleAddDev(e) {
    e.preventDefault();
    onSubmitDev({ github_user, latitude, longitude, techs });

    setGithub_user('')
    setTechs('')
  }

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleAddDev}>
        <div className="input-block">
          <label htmlFor="github_user">Usuário do Github</label>
          <input name="github_user" id="github_user" required value={github_user} onChange={e => setGithub_user(e.target.value)}/>
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}/>
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}/>
          </div>
        </div>
        <button type="submit" disabled={disabled}>Salvar</button>
      </form>
    </aside>
  )
}

export default HomeAside;