import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, checkout } from "./State/Actions";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    dispatch(checkout(cart));
    navigate("/sales");
  };

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-danger m-1" onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success m-2" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
