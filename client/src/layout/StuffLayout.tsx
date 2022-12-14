import React, { useEffect } from "react";
// Librares
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";

const StuffLayout: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default StuffLayout;
