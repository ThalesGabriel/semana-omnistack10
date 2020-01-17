import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";

import Modal from '../Modal';
import DevItem from '../DevItem';
import PageItems from "../PageItems";
import './styles.css';

const HomeMain = ({ devs, onDeleteDev }) => {
  const [ activePage, setActivePage ] = useState(0)
  const [ dev, setDev ] = useState({})
  const [ devAux, setDevAux ] = useState([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDevAux(devs.slice(0, 6))
  }, [devs])

  const handleClickOpen = (dev) => {
    setOpen(true);
    setDev(dev)
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleDelete(github_user) {
    await onDeleteDev(github_user)
  }


  function handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);

    setActivePage(pageNumber)
  }

  function limitDevs(firstItem, lastItem) {
    setDevAux(devs.slice(firstItem, lastItem))
  }

  return (
    <main>
      <ul id="devs">
        {devAux.map(dev => (
          <DevItem key={dev._id} dev={dev} onOpen={handleClickOpen} onDeleteDev={handleDelete} />
        ))}
      </ul>

      <div id="pages">
        <PageItems itemsPerPage={6} totalItems={devs.length} pageRange={6} hideFirstLastPages={true} setDevsShowed={limitDevs}/>
      </div>


      <Modal open={open} handleClose={handleClose} dev={dev} />

    </main>
  )
}

export default HomeMain;