// Libs
import { Navigate } from "react-router-dom";
// Layouts
import AuthLayout from "./layout/AuthLayout";
import StuffLayout from "./layout/StuffLayout";
import AccountLayout from "./layout/AccountLayout";
// Components
import AccountPage from "./pages/AccountPage";
// import AllCategories from "./pages/AllCategories";
import LogInPage from "./pages/AuthPages/LogInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import MainPage from "./pages/MainPage";
import Cart from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

const routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <StuffLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: ":productId", element: <ProductPage /> },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Navigate to="/auth/signup" /> },
      { path: "login", element: <LogInPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "*", element: <Navigate to="/auth/signup" /> },
    ],
  },

  {
    path: "account",
    element: isLoggedIn ? (
      <AccountLayout />
    ) : (
      <Navigate to="/auth/login" state={{ referrer: location }} />
    ),
    children: [{ path: "", element: <AccountPage /> }],
  },

  // {
  //   path: "all-categories",
  //   element: <StuffLayout />,
  //   children: [
  //     { path: "", element: <AllCategories /> },
  //     { path: ":category", element: <AllCategories /> },
  //   ],
  // },

  // {
  //   path: "product",
  //   element: <StuffLayout />,
  //   children: [{ path: ":productId", element: <ProductPage /> }],
  // },

  {
    path: "cart",
    element: <Cart />,
  },

  // { path: "*", element: <Navigate to="/" /> },
];

export default routes;
