import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ pageNumber, setPageNumber }) => {
  return (
    <div className={styles.page_container}>
      <div className={styles.page_number}>
        <i className="uil uil-estate" onClick={() => setPageNumber(1)}></i>
        <p>{pageNumber}...</p>
      </div>
      <div
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
        className={styles.next_button}
      >
        <i className="uil uil-skip-forward"></i>
      </div>
    </div>
  );
};

export default Pagination;
