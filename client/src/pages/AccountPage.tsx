import React from "react";
// Components
import ArrivalCard from "../components/common/ArrivalCard";

const AccountPage: React.FC = () => {
  return (
    <div className="account">
      <div className="container">
        <div className="account__inner">
          <h1 className="account__title">My account</h1>
          <div className="account__main">
            <div className="account__bar">
              <h3 className="bar__title">Welcome, Mr</h3>
              <ul className="bar__list">
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-box-seam bar__icon"></i>
                    Orders
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-balloon-heart bar__icon"></i>
                    Favourites
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-person bar__icon"></i>
                    Personal Data
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-key bar__icon"></i>
                    Change password
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-house bar__icon"></i>
                    Addresses
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
                <li className="bar__item">
                  <div className="bar__item-text">
                    <i className="bi bi-box-arrow-right bar__icon"></i>
                    Sign Out
                  </div>
                  <i className="bi bi-chevron-right"></i>
                </li>
              </ul>
            </div>
            <div className="account__orders">
              <h3 className="orders__title">Orders</h3>
              <div className="orders__list">
                <div className="order">
                  <ArrivalCard
                    cover="./images/arrivals/arrivals2.png"
                    name="sdfsdfsd"
                    value="sdfsdf"
                  />
                  <ArrivalCard
                    cover="./images/arrivals/arrivals2.png"
                    name="sdfsdfsd"
                    value="sdfsdf"
                  />
                  <ArrivalCard
                    cover="./images/arrivals/arrivals2.png"
                    name="sdfsdfsd"
                    value="sdfsdf"
                  />
                  <ArrivalCard
                    cover="./images/arrivals/arrivals2.png"
                    name="sdfsdfsd"
                    value="sdfsdf"
                  />
                  <ArrivalCard
                    cover="./images/arrivals/arrivals2.png"
                    name="sdfsdfsd"
                    value="sdfsdf"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
