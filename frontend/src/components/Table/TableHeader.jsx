import React from "react";

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column) => (
        <th key={column.name}>{column.name}</th>
      ))}
      <th>Actions</th>
    </tr>
  </thead>
);

export default TableHeader;
