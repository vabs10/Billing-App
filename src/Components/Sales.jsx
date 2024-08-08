import React from "react";
import { useSelector } from "react-redux";

function Sales() {
  const totalSales = useSelector((state) => state.totalSales);

  return (
    <div className="container mt-4">
      <h2>Total Sales for the Day</h2>
      <p>{totalSales}</p>
    </div>
  );
}

export default Sales;
