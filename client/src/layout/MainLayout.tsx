// Librares
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
