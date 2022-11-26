import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => (
  <section className="cart">
    <div className="container">
      <div className="cart-empty">
        <div className="cart-empty__desc">
          <h2 className="cart-empty__title">Cart is empty 😕</h2>
          <p className="cart-empty__text">Add something and comeback :)</p>
        </div>
        <img
          className="cart-empty__img"
          src="./images/empty-cart.png"
          alt="Empty cart"
        />
        <Link to="/">
          <button type="button" className="back-button">
            Back
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default CartEmpty;
