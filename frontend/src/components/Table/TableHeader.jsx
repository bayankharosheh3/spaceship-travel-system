import React from "react";

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
      <th>Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
