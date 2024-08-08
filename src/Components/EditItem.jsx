import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editItem } from "./State/Actions";
import { CONSTANTS, Util } from "./Constants";

function EditItemForm({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("Item ID:-", id);

  const [editedItem, setEditedItem] = useState(CONSTANTS.emptyItemObj);
  const isSaveDisabled = !editedItem.name || !editedItem.category || !editedItem.price || !editedItem.rating;

  useEffect(() => {
    if (items) {
      const itemToEdit = items.find((item) => String(item.id) === id);
      setEditedItem(itemToEdit || {});
    }
  }, [id, items]);

  const handleEditInputChange = (e) => {
    Util.handleEditInputChange(setEditedItem, e.target);
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    console.log("editedItem -> ", editedItem);
    dispatch(editItem(id, editedItem));
    navigate("/items");
    setEditedItem(CONSTANTS.emptyItemObj);
  };

  return (
    <>
      <form onSubmit={handleUpdateItem}>
        <div className="form-group">
          <label htmlFor="name">Name of the item</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Item Name"
            value={editedItem.name}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="category">Item Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Item Category"
            value={editedItem.category}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="price">Item Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Item Price"
            value={editedItem.price}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="rating">Item Rating</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            placeholder="Item Rating"
            value={editedItem.rating}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form group mt-3">
          <button className="btn btn-primary m-2" disabled={isSaveDisabled}>
            Save Changes
          </button>
          <button className="btn btn-secondary m-2" type="button" onClick={() => setEditedItem(CONSTANTS.emptyItemObj)}>
            Clear Fields
          </button>
        </div>
      </form>
    </>
  );
}

export default EditItemForm;
