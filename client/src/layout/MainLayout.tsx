import React from "react";
// Librares
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
