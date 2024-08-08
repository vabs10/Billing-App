import { Route, Routes } from "react-router-dom";
import AddItemForm from "./AddItem";
import EditItemForm from "./EditItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, deleteItemRequest, addToCart } from "./State/Actions";
import ItemsTable from "./ItemsTable";
import Cart from "./Cart";
import Sales from "./Sales";

function BakeryRouters() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItemRequest(id));
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <>
      <Routes>
        <Route
          path="/items"
          element={<ItemsTable items={items} handleDelete={handleDelete} handleAddToCart={handleAddToCart} />}
        ></Route>
        <Route path="/add" element={<AddItemForm />}></Route>
        <Route path="/edit/item/:id" element={<EditItemForm items={items} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
      </Routes>
    </>
  );
}

export default BakeryRouters;
