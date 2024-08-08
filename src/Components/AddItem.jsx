import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./State/Actions";
import { CONSTANTS, Util } from "./Constants";
import { useNavigate } from "react-router-dom";

function AddItemForm() {
  const [newItem, setNewItem] = useState(CONSTANTS.emptyItemObj);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSaveDisabled = !newItem.name || !newItem.category || !newItem.price || !newItem.rating;

  const handleEditInputChange = (e) => {
    Util.handleEditInputChange(setNewItem, e.target);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log("newItem -> ", newItem);
    dispatch(addItem(newItem));
    navigate("/items");
    setNewItem(CONSTANTS.emptyItemObj);
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter item name"
            value={newItem.name}
            onChange={handleEditInputChange}
            required // Add required attribute for validation
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Enter item category"
            value={newItem.category}
            onChange={handleEditInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Enter item price"
            value={newItem.price}
            onChange={handleEditInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            placeholder="Enter item rating"
            value={newItem.rating}
            onChange={handleEditInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={isSaveDisabled}>
            Add Item
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setNewItem(CONSTANTS.emptyItemObj)}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItemForm;
