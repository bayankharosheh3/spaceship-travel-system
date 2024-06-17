import React from "react";
import Button from "../Button";
import styles from "./styles.module.css";

const TableRow = ({
  row,
  columns,
  isEditing,
  editRow,
  onEditChange,
  onSaveClick,
  onCancelClick,
  onEditClick,
  onDeleteClick,
}) => (
  <tr>
    {columns.map((column) => (
      <td key={column}>
        {isEditing ? (
          <input
            type="text"
            value={editRow[column]}
            onChange={(e) => onEditChange(e, column)}
          />
        ) : (
          row[column]
        )}
      </td>
    ))}
    <td>
      {isEditing ? (
        <div className={styles.btnsContainer}>
          <Button onClick={onSaveClick} text="Save" />
          <Button onClick={onCancelClick} text="Cancel" />
        </div>
      ) : (
        <div className={styles.btnsContainer}>
          <Button onClick={onEditClick} text="Edit" />
          <Button onClick={onDeleteClick} text="Delete" />
        </div>
      )}
    </td>
  </tr>
);

export default TableRow;
