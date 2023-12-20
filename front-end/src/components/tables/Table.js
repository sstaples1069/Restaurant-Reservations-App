import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorAlert from "../../layout/ErrorAlert";

export default function Table({ table }) {
  const [error, setError] = useState(null);
  const history = useHistory();
  
  return (
    <>
      <ErrorAlert error={error} />
      <tr>
        <th scope="row">{table.table_id}</th>
        <td>{table.table_name}</td>
        <td>{table.capacity}</td>
        <td>{table.reservation_id}</td>
        <td data-table-id-status={table.table_id}>{table.reservation_id ? "occupied" : "free"}</td>
        
      </tr>
    </>
  );
}