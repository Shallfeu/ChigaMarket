// Librares
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
// Components
// Pages

// Store

const StuffLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default StuffLayout;
