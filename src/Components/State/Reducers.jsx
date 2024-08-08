import { FETCH_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./Actions";

const initialState = {
  items: [],
  cart: [],
  totalSales: 0,
};

const bakeryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      console.log("Deleting Item", action.payload);
      const deletedItems = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: deletedItems };

    case ADD_ITEM:
      console.log("Adding Item: ", action.payload);
      return { ...state, items: [...state.items, action.payload] };

    case EDIT_ITEM:
      console.log("Editing Item: ", action.payload.updatedItem);
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.updatedItem.id ? action.payload.updatedItem : item
        ),
      };

    case FETCH_ITEMS:
      return { ...state, items: action.payload };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case CHECKOUT:
      const total = action.payload.reduce((acc, item) => acc + item.price, 0);
      return { ...state, cart: [], totalSales: state.totalSales + total };

    default:
      return state;
  }
};

export default bakeryReducer;
