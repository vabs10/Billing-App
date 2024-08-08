import React from "react";
import Item from "./Items";

function ItemsTable({ items, handleDelete, handleAddToCart }) {
  return (
    <div className="container mt-4">
      <table className="table table-striped table-hover">
        <thead className="theme-header"> {/* Custom theme class for header */}
          <tr>
            <th scope="col">Sl.No</th>
            {/* <th scope="col">Image</th>  Added image column */}
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>  {/*  Display rating visually */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Item
              key={item.id}
              SlNo={index + 1}
              item={item}
              handleDelete={handleDelete}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
