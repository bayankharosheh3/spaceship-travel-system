import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button";

const Table = ({ columns, data, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editRow, setEditRow] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleEditChange = (e, column) => {
    const { value } = e.target;
    setEditRow({ ...editRow, [column]: value });
  };

  const handleEditClick = (index, row) => {
    setEditIndex(index);
    setEditRow(row);
  };

  const handleSaveClick = () => {
    if (window.confirm("Are you sure you want to save changes?")) {
      onEdit(editRow);
      setEditIndex(null);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

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
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column}>
                  {editIndex === indexOfFirstRow + rowIndex ? (
                    <input
                      type="text"
                      value={editRow[column]}
                      onChange={(e) => handleEditChange(e, column)}
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
              <td>
                {editIndex === indexOfFirstRow + rowIndex ? (
                  <div className={styles.btnsContainer}>
                    <Button onClick={handleSaveClick} text={"Save"} />
                    <Button
                      onClick={() => setEditIndex(null)}
                      text={"Cancel"}
                    />
                  </div>
                ) : (
                  <div className={styles.btnsContainer}>
                    <Button
                      onClick={() =>
                        handleEditClick(indexOfFirstRow + rowIndex, row)
                      }
                      text={"Edit"}
                    />
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this element?"
                          )
                        ) {
                          onDelete(row);
                        }
                      }}
                      text={"Delete"}
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <Button
          onClick={handlePrevPage}
          text={"«"}
          disabled={currentPage === 1}
        />
        {pageNumbers.map((number) => (
          <Button
            key={number}
            onClick={() => handlePageChange(number)}
            text={number}
            className={currentPage === number ? styles.active : ""}
          />
        ))}
        <Button
          onClick={handleNextPage}
          text={"»"}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Table;
