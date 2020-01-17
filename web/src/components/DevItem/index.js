import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import './styles.css'

const DevItem = ({ dev, onOpen, onDeleteDev }) => {

  function sendDev(e) {
    e.preventDefault()

    onOpen(dev)
  }

  async function deleteDev(e) {
    e.preventDefault()

    await onDeleteDev(dev.github_user)
  }

  return (
    <>
      <li className="dev-item">
        <header>
          <img src={dev.avatar_url} />
          <div className="user-info">
            <strong>{dev.github_user}</strong>
            <span>{dev.techs.join(", ")}</span>
            <div className="icon1">
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={sendDev}>
                <EditIcon />
              </IconButton>
              <IconButton color="primary" aria-label="upload picture" component="span" onClick={deleteDev}>
                <DeleteIcon />
              </IconButton>
            </div>
            <div className="icon"></div>
          </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_user}`}>Visitar perfil no github</a>
      </li>
    </>
  )
}

export default DevItem;