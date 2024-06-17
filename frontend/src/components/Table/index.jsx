import React, { useState } from "react";
import styles from "./styles.module.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";

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

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader columns={columns} />
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              row={row}
              columns={columns}
              isEditing={editIndex === indexOfFirstRow + rowIndex}
              editRow={editRow}
              onEditChange={handleEditChange}
              onSaveClick={handleSaveClick}
              onCancelClick={() => setEditIndex(null)}
              onEditClick={() =>
                handleEditClick(indexOfFirstRow + rowIndex, row)
              }
              onDeleteClick={() => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this element?"
                  )
                ) {
                  onDelete(row);
                }
              }}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
