import React, { useState } from "react";
// Libs
import _ from "lodash";
// Utils
import { getAllOrders } from "../../store/ordersSlice/selectors";
import { useAppSelector } from "../../store/hooks";
// Components
import Loader from "../common/Loader";
import Table from "../common/Table/index";
import BackBtn from "../common/BackBtn";

const OrdersListAdmin: React.FC = () => {
  const orders = useAppSelector(getAllOrders);
  const [sortBy, setSortBy] = useState<{
    path: string;
    order: "asc" | "desc";
  }>({
    path: "string",
    order: "asc",
  });

  if (!orders) return <Loader />;

  const handleSort = (item: { path: string; order: "asc" | "desc" }) =>
    setSortBy(item);

  const sortedOrders = _.orderBy(orders, [sortBy.path], sortBy.order);

  const columns = {
    _id: { path: "_id", name: "ID" },
    totalCost: { path: "totalCost", name: "Total" },
    userId: { path: "userId", name: "User" },
    created_at: { path: "created_at", name: "Created" },
  };

  return (
    <div className="admin-list">
      <div className="container">
        <BackBtn />
        <div className="admin-list__inner">
          {sortedOrders.length !== 0 ? (
            <Table
              selectedSort={sortBy}
              columns={columns}
              onSort={handleSort}
              data={sortedOrders}
            />
          ) : (
            <div className="admin-list__empty">There is no items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersListAdmin;
