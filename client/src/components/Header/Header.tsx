import React, { useEffect } from "react";
// Libs
import { NavLink } from "react-router-dom";
// Components
import Search from "./Search";
// Utils
import { getCartItems } from "../../store/cartSlice/selectors";
import { useAppSelector } from "../../store/hooks";
import { getCurrentUserId, isAdmin } from "../../store/authSlice/selectors";
import { getUserById } from "../../store/usersSlice/selectors";
import config from "../../config.json";

const Header: React.FC = () => {
  const admin = useAppSelector(isAdmin);
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));
  const cartItems = useAppSelector(getCartItems);
  const items = useAppSelector(getCartItems);
  const isMounted = React.useRef(false);
  const avatar = currentUser?.avatar
    ? `${config.avatarEndPoint}/${currentUser.avatar}`
    : "";

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
            {admin && currentUser && (
              <NavLink to="/admin" className="icons__item">
                <i className="bi bi-gear-fill"></i>
              </NavLink>
            )}
            <NavLink to="/account/orders" className="icons__item">
              {currentUser ? (
                currentUser?.avatar ? (
                  <img src={avatar} alt="avatar" className="icons__avatar" />
                ) : (
                  <img
                    src={currentUser.image}
                    alt="avatar"
                    className="icons__avatar"
                  />
                )
              ) : (
                <i className="bi bi-person-fill"></i>
              )}
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
