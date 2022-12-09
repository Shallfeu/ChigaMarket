// Libs
import { Navigate } from "react-router-dom";
// Layouts
import AuthLayout from "./layout/AuthLayout";
import StuffLayout from "./layout/StuffLayout";
import AccountLayout from "./layout/AccountLayout";
import MainLayout from "./layout/MainLayout";
// Components
import AllCategories from "./pages/AllCategories";
import LogInPage from "./pages/AuthPages/LogInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import MainPage from "./pages/MainPage";
import Cart from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import OrdersList from "./components/Order/OrdersList";
import Favourite from "./components/Favourites/Favourite";
import PersonalData from "./components/Account/PersonalData";
import ChangePassword from "./components/Account/ChangePassword";
import ChangeAdresses from "./components/Account/ChangeAdresses";
import LogOut from "./pages/AuthPages/LogOut";

const routes = (isLoggedIn, location) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "", element: <MainPage /> }],
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
    children: [
      { path: "", element: <Navigate to="/account/orders" /> },
      { path: "orders", element: <OrdersList /> },
      { path: "favourite", element: <Favourite /> },
      { path: "person", element: <PersonalData /> },
      { path: "password", element: <ChangePassword /> },
      { path: "point", element: <ChangeAdresses /> },
      { path: "logout", element: <LogOut /> },
      { path: "*", element: <Navigate to="/account/orders" /> },
    ],
  },

  {
    path: "all-categories",
    element: <StuffLayout />,
    children: [
      { path: "", element: <AllCategories /> },
      {
        path: ":general",
        element: <AllCategories />,
        children: [{ path: ":subcategory", element: <AllCategories /> }],
      },
    ],
  },

  {
    path: "product",
    element: <StuffLayout />,
    children: [{ path: ":productId", element: <ProductPage /> }],
  },

  {
    path: "cart",
    element: <Cart />,
  },

  { path: "*", element: <Navigate to="/" /> },
];

export default routes;
