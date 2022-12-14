import { useEffect } from "react";
// Libs
import { Outlet } from "react-router-dom";
// Components
import Header from "../components/Header/Header";
// Utils
import { useAppDispatch } from "../store/hooks";
import { loadOrders } from "../store/ordersSlice/actions";
import { loadReviews } from "../store/reviewSlice/actions";

const AdminLayout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore: Unreachable code error
    dispatch(loadOrders());
    // @ts-ignore: Unreachable code error
    dispatch(loadReviews());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AdminLayout;
