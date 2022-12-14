// Libs
import { Navigate } from "react-router-dom";
// Layouts
import AuthLayout from "./layout/AuthLayout";
import StuffLayout from "./layout/StuffLayout";
import AccountLayout from "./layout/AccountLayout";
import MainLayout from "./layout/MainLayout";
import AllCatLayout from "./layout/AllCatLayout";
import AdminLayout from "./layout/AdminLayout";
// Components
import AllCategories from "./pages/AllCategories";
import LogInPage from "./pages/AuthPages/LogInPage";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import MainPage from "./pages/MainPage";
import Cart from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import OrdersList from "./components/Order/OrdersList";
import PersonalData from "./components/Account/PersonalData";
import ChangePassword from "./components/Account/ChangePassword";
import ChangeAdresses from "./components/Account/ChangeAdresses";
import LogOut from "./pages/AuthPages/LogOut";
import Favourite from "./components/Account/Favourites/Favourite";
import AdminPage from "./pages/AdminPage";
import AdminForm from "./components/Admin/AdminForm";
import UsersList from "./components/Admin/UsersList";
import ReviewsList from "./components/Admin/ReviewsList";
import ProductsList from "./components/Admin/ProductsList";
import OrdersListAdmin from "./components/Admin/OrdersListAdmin";

const routes = (isLoggedIn, location, admin) => [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <MainPage />, breadcrumb: "Home" },
      {
        path: "all-categories",
        element: <AllCatLayout />,
        children: [
          {
            path: "",
            element: <AllCategories />,
            breadcrumb: "All categories",
          },
          {
            path: ":category",
            element: <AllCategories />,
            children: [{ path: ":subcategory", element: <AllCategories /> }],
          },
        ],
      },
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
    path: "admin",
    element: admin && isLoggedIn ? <AdminLayout /> : <Navigate to="/" />,
    children: [
      { path: "", element: <AdminPage /> },
      { path: "subcategory", element: <AdminForm /> },
      { path: "product", element: <AdminForm /> },
      { path: "users", element: <UsersList /> },
      { path: "reviews", element: <ReviewsList /> },
      { path: "products", element: <ProductsList /> },
      { path: "orders", element: <OrdersListAdmin /> },
      { path: ":productId", element: <AdminForm /> },
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
];

export default routes;
