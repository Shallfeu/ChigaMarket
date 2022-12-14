import React from "react";
// Libs
import { NavLink, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
// Utils
import routes from "../../routes";

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(routes(false, location));

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          key={match.pathname}
          to={match.pathname}
          className="breadcrumbs__item"
        >
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};

export default BreadCrumbs;
