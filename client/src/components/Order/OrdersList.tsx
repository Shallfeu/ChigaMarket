import React, { useEffect } from "react";
// Libs
import { orderBy } from "lodash";
// Components
import Loader from "../common/Loader";
// Utils
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadOrders } from "../../store/ordersSlice/actions";
import { getAllOrders } from "../../store/ordersSlice/selectors";
import OrderItem from "./OrderItem";
import { date } from "../../utils/date";

const OrdersList: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  const orders = useAppSelector(getAllOrders);

  if (!orders) return <Loader />;

  const sortedOrders = orderBy(orders, ["created_at"], ["desc"]);

  return (
    <>
      <h3 className="orders__title">Orders</h3>
      <div className="orders__list">
        {sortedOrders.length > 0 ? (
          sortedOrders.map((order) => (
            <div key={order._id} className="orders__list-item">
              <div className="orders__row">
                {order.products.map((order) => (
                  <OrderItem
                    _id={order.productId}
                    key={order.productId}
                    quantity={order.quantity}
                  />
                ))}
              </div>
              <div className="orders__row-info">
                <div className="row-info__item">
                  <h4 className="row-info__title">Name</h4>
                  <h4 className="row-info__text">{order.userName}</h4>
                </div>
                <div className="row-info__item">
                  <h4 className="row-info__title">Shipped date</h4>
                  <h4 className="row-info__text">{date(order.created_at)}</h4>
                </div>
                <div className="row-info__item">
                  <h4 className="row-info__title">Total</h4>
                  <h4 className="row-info__text">${order.totalCost}</h4>
                </div>
                <div className="row-info__item">
                  <h4 className="row-info__title">Point</h4>
                  <h4 className="row-info__text">{order.address}</h4>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="favourite__empty">
            You do not have any orders, go and buy something!
          </div>
        )}
      </div>
    </>
  );
};

export default OrdersList;
