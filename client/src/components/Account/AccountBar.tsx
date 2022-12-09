import React from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import { getCurrentUserId } from "../../store/authSlice/selectors";
import { useAppSelector } from "../../store/hooks";
import { getUserById } from "../../store/usersSlice/selectors";
import Loader from "../common/Loader";

const AccountBar: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));

  if (!currentUser) return <Loader />;

  return (
    <>
      <h3 className="bar__title">Welcome, {currentUser.name}</h3>
      <ul className="bar__list">
        <Link to="orders" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-box-seam bar__icon"></i>
            Orders
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link to="favourite" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-balloon-heart bar__icon"></i>
            Favourites
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link to="person" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-person bar__icon"></i>
            Personal Data
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link to="password" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-key bar__icon"></i>
            Change password
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link to="point" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-house bar__icon"></i>
            Addresses
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
        <Link to="logout" className="bar__item">
          <div className="bar__item-text">
            <i className="bi bi-box-arrow-right bar__icon"></i>
            Log Out
          </div>
          <i className="bi bi-chevron-right"></i>
        </Link>
      </ul>
    </>
  );
};

export default AccountBar;
