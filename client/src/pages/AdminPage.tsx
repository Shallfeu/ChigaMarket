import React, { useState } from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import Popup from "../components/Popup";
import EditSubcategoryForm from "../components/Admin/EditSubcategoryForm";
// Utils
import { useAppSelector } from "../store/hooks";
import { getUsers } from "../store/usersSlice/selectors";
import { getAllStuff } from "../store/stuffSlice/selectors";
import { getAllOrders } from "../store/ordersSlice/selectors";
import { getReviews } from "../store/reviewSlice/selectors";

const AdminPage: React.FC = () => {
  const users = useAppSelector(getUsers);
  const products = useAppSelector(getAllStuff);
  const orders = useAppSelector(getAllOrders);
  const reviews = useAppSelector(getReviews);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="admin">
      <div className="container">
        <Popup trigger={toggle} setToggle={setToggle}>
          <EditSubcategoryForm />
        </Popup>
        <div className="admin__inner">
          <h2 className="admin__title">Admin Panel</h2>
          <div className="admin__stat">
            <h2 className="admin__stat-title">Statistic</h2>
            <ul className="admin__stat-list">
              <Link
                to="/admin/users"
                type="button"
                className="admin__list-item effect gr"
              >
                <div className="admin__item-info">
                  <i className="bi bi-people-fill admin__icon"></i>
                  <span className="admin__name">Users</span>
                </div>
                <span className="admin__quan">{users?.length}</span>
              </Link>
              <Link to="/admin/products" className="admin__list-item effect rd">
                <div className="admin__item-info">
                  <i className="bi bi-egg-fill admin__icon"></i>
                  <span className="admin__name">Products</span>
                </div>
                <span className="admin__quan">{products?.length}</span>
              </Link>
              <Link to="/admin/reviews" className="admin__list-item effect bl">
                <div className="admin__item-info">
                  <i className="bi bi-twitch admin__icon"></i>
                  <span className="admin__name">Reviews</span>
                </div>
                <span className="admin__quan">{reviews?.length}</span>
              </Link>
              <Link to="/admin/orders" className="admin__list-item effect yl">
                <div className="admin__item-info">
                  <i className="bi bi-list-ol admin__icon"></i>
                  <span className="admin__name">Orders</span>
                </div>
                <span className="admin__quan">{orders?.length}</span>
              </Link>
            </ul>
          </div>
          <div className="admin__btns">
            <button
              type="button"
              className="admin__btns-item"
              onClick={() => setToggle(true)}
            >
              <span>Edit subcategory</span>
            </button>
            <Link
              to="/admin/product"
              type="button"
              className="admin__btns-item"
            >
              <span>Add new product</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
