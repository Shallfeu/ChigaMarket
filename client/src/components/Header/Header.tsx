import React, { useEffect } from "react";
// Libs
import { NavLink } from "react-router-dom";
// Components
import { getCartItems } from "../../store/cartSlice/selectors";
import { useAppSelector } from "../../store/hooks";
import Search from "./Search";

const Header: React.FC = () => {
  const cartItems = useAppSelector(getCartItems);
  const items = useAppSelector(getCartItems);
  const isMounted = React.useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
    isMounted.current = true;
  }, [items]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            <h1 className="shop-name">Chiga</h1>
          </NavLink>

          <Search />

          <div className="icons">
            <NavLink to="/account" className="icons__item">
              <i className="bi bi-person-fill"></i>
            </NavLink>

            <NavLink to="/cart" className="icons__item cart-link">
              <i className="bi bi-cart-fill"></i>
              {cartItems.length !== 0 && (
                <span className="cart__count">{cartItems.length}</span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
