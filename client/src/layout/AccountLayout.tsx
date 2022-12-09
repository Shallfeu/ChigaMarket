import React from "react";
// Librares
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// Components
import AccountBar from "../components/Account/AccountBar";

const AccountLayout: React.FC = () => {
  return (
    <>
      <Header />
      <div className="account">
        <div className="container">
          <div className="account__inner">
            <h1 className="account__title">My account</h1>
            <div className="account__main">
              <div className="account__bar">
                <AccountBar />
              </div>
              <div className="account__orders">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
