import React from 'react';
import { useState } from 'react';
import "../style/component/CustomTable.css"

function CustomTable({ headers, data }) {
  // State for the selected month
  const [selectedMonth, setSelectedMonth] = useState('');
  // handle the change in the selected month
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
    // Filter the data based on the selected month
  const filteredData = selectedMonth ? data.filter((item) => item.month === selectedMonth): data;

  return (
    <div>
      <div className="select-container">
        <select className="select-input" value={selectedMonth} onChange={handleMonthChange}>
          <option className="select-options" value="">All Months</option>
          {Array.from(new Set(data.map((item) => item.month))).map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
          ))}
        </select>
      </div>
      <div className="custom-table-container">
        <table className="custom-table">
          <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomTable;
