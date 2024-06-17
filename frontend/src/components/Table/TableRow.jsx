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
      <td key={column.name}>
        {isEditing && column.type === "select" ? (
          <select
            value={editRow[column.name]}
            onChange={(e) => onEditChange(e, column.name)}
          >
            {column.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : isEditing ? (
          <input
            type={column.type}
            value={editRow[column.name]}
            onChange={(e) => onEditChange(e, column.name)}
          />
        ) : (
          row[column.name]
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
