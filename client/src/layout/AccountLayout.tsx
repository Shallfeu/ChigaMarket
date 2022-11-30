// Librares
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// Components
// Pages

// Store

const AccountLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AccountLayout;
