import { Link, Outlet, useLocation } from "react-router-dom";
import BakeryRouters from "./Routers";

function NavLinks() {
  const location = useLocation();
  const shouldHideAddBtn = location.pathname.includes("/add");
  const shouldHideItemsBtn = location.pathname.includes("/items");

  return (
    <>
      <div className="container">
        <ul className="nav">
          {!shouldHideItemsBtn && (
            <li className="nav-item">
              <Link to="/items">
                <button className="btn btn-primary m-2">Items</button>
              </Link>
            </li>
          )}
          {!shouldHideAddBtn && (
            <li className="nav-item">
              <Link to="/add">
                <button className="btn btn-warning m-2">Add New Item</button>
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/cart">
              <button className="btn btn-info m-2">Cart</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sales">
              <button className="btn btn-success m-2">Sales</button>
            </Link>
          </li>
        </ul>
        <Outlet />
        <BakeryRouters />
      </div>
    </>
  );
}

export default NavLinks;
