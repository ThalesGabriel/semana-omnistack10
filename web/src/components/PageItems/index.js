import React, { useState } from 'react';

import Pagination from "react-js-pagination";

const PageItems = ({ itemsPerPage, totalItems, pageRange, hideFirstLastPages, setDevsShowed }) => {
  const [ activePage, setActivePage ] = useState(1)

  function handlePageChange(pageNumber) {
    let firstItem = (pageNumber * itemsPerPage) - itemsPerPage;
    let lastItem = (pageNumber * itemsPerPage) > totalItems? totalItems: pageNumber * itemsPerPage;
    setActivePage(pageNumber);

    setDevsShowed(firstItem, lastItem)
  }

  return (
    <Pagination
      nextPageText='Próxima'
      prevPageText='Anterior'
      hideFirstLastPages={hideFirstLastPages}
      activePage={activePage}
      itemsCountPerPage={itemsPerPage}
      totalItemsCount={totalItems}
      pageRangeDisplayed={pageRange}
      onChange={handlePageChange.bind(this)}
    />
  )
}

export default PageItems;