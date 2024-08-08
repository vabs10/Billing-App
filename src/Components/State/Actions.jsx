import { CONSTANTS } from "../Constants";
import axios from "axios";

// Action types
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const FETCH_ITEMS = "FETCH_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHECKOUT = "CHECKOUT";

// Action creators
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const editItem = (id, updatedItem) => ({
  type: EDIT_ITEM,
  payload: { id, updatedItem },
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const fetchItems = () => {
  return (dispatch) => {
    axios
      .get(CONSTANTS.backEndUrl)
      .then((response) => {
        dispatch({
          type: FETCH_ITEMS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  };
};

export const createItem = (item) => {
  return (dispatch) => {
    axios
      .post(CONSTANTS.backEndUrl, item)
      .then((response) => {
        dispatch(addItem(response.data));
      })
      .catch((error) => {
        console.error("Error creating item:", error);
      });
  };
};

export const updateItemRequest = (id, updatedItem) => {
  return (dispatch) => {
    axios
      .put(`${CONSTANTS.backEndUrl}/${id}`, updatedItem)
      .then((response) => {
        dispatch(editItem(id, response.data));
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };
};

export const deleteItemRequest = (id) => {
  return (dispatch) => {
    axios
      .delete(`${CONSTANTS.backEndUrl}/${id}`)
      .then(() => {
        dispatch(deleteItem(id));
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
};

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const checkout = (cart) => ({
  type: CHECKOUT,
  payload: cart,
});
