// Librares
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";

const StuffLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default StuffLayout;
