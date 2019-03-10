import React from 'react';

import ReactPaginate from 'react-paginate';
import './styles.css'


const Pagination = ({changePage}) =>{
    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={15}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(data) =>changePage(data)}
          pageClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          initialPage={0}
        />
      </div>
    )
};

export default Pagination