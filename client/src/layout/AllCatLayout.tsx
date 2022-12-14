import React, { useEffect } from "react";
// Librares
import { Outlet } from "react-router-dom";
// Components
import BreadCrumbs from "../components/common/BreadCrumbs";

const AllCatLayout: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="container">
      <BreadCrumbs />
      <Outlet />
    </div>
  );
};

export default AllCatLayout;
