import React from "react";

export default function Select(props) {
  const { onSortChange } = props;

  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}
