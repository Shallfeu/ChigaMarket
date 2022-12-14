import React from "react";
// Libs
import { ToastContainer } from "react-toastify";
import { useLocation, useRoutes } from "react-router-dom";
// Components
import AppLoader from "./hoc/AppLoader";
// Utils
import routes from "./routes";
import { getLogged, isAdmin } from "./store/authSlice/selectors";
import { useAppSelector } from "./store/hooks";
// styles
import "./scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const admin = useAppSelector(isAdmin);
  const location = useLocation();
  const isLoggedIn = useAppSelector(getLogged);
  const elements = useRoutes(routes(isLoggedIn, location, admin));

  return (
    <AppLoader>
      {elements}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
    </AppLoader>
  );
};

export default App;
