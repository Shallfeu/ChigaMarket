import React from "react";
// Components
import CartEmpty from "../components/Cart/CartEmpty";
import CartItemBox from "../components/Cart/CartItemBox";
import Header from "../components/Header/Header";
import {
  getCartItems,
  getTotalDiscount,
  getTotalPrice,
} from "../store/cartSlice/selectors";
import { useAppSelector } from "../store/hooks";

const Cart: React.FC = () => {
  const data = useAppSelector(getCartItems);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalDiscount = useAppSelector(getTotalDiscount);

  if (data.length === 0)
    return (
      <>
        <Header />
        <CartEmpty />
      </>
    );

  return (
    <>
      <Header />
      <section className="cart">
        <div className="container">
          <div className="cart__inner">
            <div className="cart__details">
              {data.map((item: any) => {
                return (
                  <CartItemBox
                    key={item.id}
                    id={item.id}
                    discount={item.discount}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>

            <div className="cart__payment">
              <button type="button" className="payment__button">
                Go to payment
              </button>
              <div className="payment__area">
                <h1 className="payment__title">Cart Summary</h1>
                <ul className="payment__info">
                  <li className="payment__total payment-row">
                    <h3 className="payment__h3">Total price</h3>
                    <span className="payment__total">{totalPrice}$</span>
                  </li>
                  <li className="payment__quantity payment-row">
                    <h3 className="payment__h3">Quantity</h3>
                    <span className="payment__quan">{data.length}</span>
                  </li>
                  <li className="payment__discount payment-row">
                    <h3 className="payment__h3">Discount</h3>
                    <span className="payment__disc">{totalDiscount}</span>
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
