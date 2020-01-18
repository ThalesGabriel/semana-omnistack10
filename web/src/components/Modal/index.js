import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './styles.css';

export default function Modal({ open, handleClose, dev, handleUser }) {
  const [ bio, setBio ] = useState('')
  const [ name, setName ] = useState('')
  const [ techs, setTechs ] = useState('')
  const [ github_user, setGithub_user ] = useState('')

  useEffect(() => { 

    async function loadParams() {
      await setBio(dev.bio)
      await setName(dev.name)
      await setTechs(dev.techs)
      await setGithub_user(dev.github_user)
    }
    loadParams()
  }, [dev]);

  function handleDev(e) {
    e.preventDefault()
    handleClose({ name, techs, bio, github_user })
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Editar - {dev.github_user}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-multiline-static-user"
            label="Usuário no Github"
            value={github_user || ''}
            onChange={e => setGithub_user(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static-username"
            label="Nome"
            value={name || ''}
            onChange={e => setName(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static-bio"
            label="Biografia"
            multiline
            rows="4"
            value={bio || ''}
            onChange={e => setBio(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="outlined-multiline-static-techs"
            label="Tecnologias"
            value={techs  || ''}
            onChange={e => setTechs(e.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDev} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}