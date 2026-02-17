// src/components/ui/Table.jsx

import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No hay datos disponibles</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
