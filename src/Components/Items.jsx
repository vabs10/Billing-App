import { Link } from "react-router-dom";

function Item({ SlNo, item, handleDelete, handleAddToCart }) {
  const toLink = `/edit/item/${item.id}`;

  return (
    <>
      <tr>
        <td>{SlNo}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td>{item.rating}</td>
        <td>
          <button className="btn btn-danger m-1" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
          <Link to={toLink}>
            <button className="btn btn-primary m-1" item={item}>
              Edit
            </button>
          </Link>
          <button className="btn btn-success m-1" onClick={() => handleAddToCart(item)}>
            Add to Cart
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
