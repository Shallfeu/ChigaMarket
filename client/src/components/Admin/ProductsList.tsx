import React, { useState } from "react";
// Libs
import _ from "lodash";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getAllStuff } from "../../store/stuffSlice/selectors";
// Components
import Loader from "../common/Loader";
import Table from "../common/Table/index";
import BackBtn from "../common/BackBtn";

const ProductsList: React.FC = () => {
  const products = useAppSelector(getAllStuff);
  const [sortBy, setSortBy] = useState<{
    path: string;
    order: "asc" | "desc";
  }>({
    path: "string",
    order: "asc",
  });

  if (!products) return <Loader />;

  const handleSort = (item: { path: string; order: "asc" | "desc" }) =>
    setSortBy(item);

  const sortedProducts = _.orderBy(products, sortBy.path, sortBy.order);

  const columns = {
    image: { path: "", name: "Image" },
    name: { path: "name", name: "Name" },
    price: { path: "price", name: "Price" },
    discount: { path: "discount", name: "Discount / %" },
    category: { path: "category", name: "Category" },
    subcategory: { path: "subcategory", name: "Subcategory" },
    extra: { path: "extra", name: "Extra" },
  };

  return (
    <div className="admin-list">
      <div className="container">
        <BackBtn />
        <div className="admin-list__inner">
          {sortedProducts.length !== 0 ? (
            <Table
              selectedSort={sortBy}
              columns={columns}
              onSort={handleSort}
              data={sortedProducts}
            />
          ) : (
            <div className="admin-list__empty">There is no items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
