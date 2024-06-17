import React from "react";
import Button from "../Button";
import styles from "./styles.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (currentPage === 1) {
      endPage = Math.min(3, totalPages);
    } else if (currentPage === totalPages) {
      startPage = Math.max(1, totalPages - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        text="«"
        disabled={currentPage === 1}
      />
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          text={number}
          className={currentPage === number ? styles.active : ""}
        />
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        text="»"
        disabled={currentPage === totalPages}
      />
    </div>
  );
};

export default Pagination;
