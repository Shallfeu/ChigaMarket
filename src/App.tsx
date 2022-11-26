// Libs
import { useLocation, useRoutes } from "react-router-dom";
// Components
import AppLoader from "./hoc/AppLoader";
import routes from "./routes";
// styles
import "./scss/app.scss";

const App = () => {
  const location = useLocation();
  const isLoggedIn = true;
  const elements = useRoutes(routes(isLoggedIn, location));

  return <AppLoader>{elements}</AppLoader>;
};

export default App;
