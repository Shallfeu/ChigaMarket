import React, { useState } from "react";
// Libs
import { toast } from "react-toastify";
// Components
import CartEmpty from "../components/Cart/CartEmpty";
import CartItemBox from "../components/Cart/CartItemBox";
import Header from "../components/Header/Header";
import OrderForm from "../components/Order/OrderForm";
import Popup from "../components/Popup";
// Utils
import {
  getCartItems,
  getTotalDiscount,
  getTotalPrice,
} from "../store/cartSlice/selectors";
import { useAppSelector } from "../store/hooks";
import { getCurrentUserId } from "../store/authSlice/selectors";

const Cart: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const products = useAppSelector(getCartItems);
  const totalDiscount = useAppSelector(getTotalDiscount);
  const totalPrice = useAppSelector(getTotalPrice) - totalDiscount;
  const [toggle, setToggle] = useState(false);

  if (products.length === 0)
    return (
      <>
        <Header />
        <CartEmpty />
      </>
    );

  const handlePay = () => {
    if (currentUserId) {
      setToggle(true);
    } else {
      toast.warn("If you want to create an order, login your account");
    }
  };

  return (
    <>
      <Header />
      <section className="cart">
        <div className="container">
          <Popup trigger={toggle} setToggle={setToggle}>
            <OrderForm products={products} totalCost={totalPrice} />
          </Popup>
          <div className="cart__inner">
            <div className="cart__details">
              {products.map((item: any) => {
                return (
                  <CartItemBox
                    key={item._id}
                    _id={item._id}
                    discount={item.discount}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    category={item.category}
                    brand={item.brand}
                  />
                );
              })}
            </div>

            <div className="cart__payment">
              <button
                type="button"
                className="payment__button"
                onClick={handlePay}
              >
                Go to payment
              </button>
              <div className="payment__area">
                <h1 className="payment__title">Cart Summary</h1>
                <ul className="payment__info">
                  <li className="payment__total payment-row">
                    <h3 className="payment__h3">Total price</h3>
                    <span className="payment__total">${totalPrice}</span>
                  </li>
                  <li className="payment__quantity payment-row">
                    <h3 className="payment__h3">Quantity</h3>
                    <span className="payment__quan">{products.length}</span>
                  </li>
                  <li className="payment__discount payment-row">
                    <h3 className="payment__h3">Discount</h3>
                    <span className="payment__disc">${totalDiscount}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
