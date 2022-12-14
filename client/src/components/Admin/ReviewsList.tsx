import React, { useState } from "react";
// Libs
import _ from "lodash";
// Utils
import { useAppSelector } from "../../store/hooks";
import Loader from "../common/Loader";
// Components
import Table from "../common/Table/index";
import { getReviews } from "../../store/reviewSlice/selectors";
import BackBtn from "../common/BackBtn";

const ReviewsList: React.FC = () => {
  const reviews = useAppSelector(getReviews);
  const [sortBy, setSortBy] = useState<{
    path: string;
    order: "asc" | "desc";
  }>({
    path: "string",
    order: "asc",
  });

  if (!reviews) return <Loader />;

  const handleSort = (item: { path: string; order: "asc" | "desc" }) =>
    setSortBy(item);

  const sortedReviews = _.orderBy(reviews, [sortBy.path], sortBy.order);

  const columns = {
    pageId: { path: "pageId", name: "Page Id" },
    content: { path: "content", name: "Content" },
    userId: { path: "userId", name: "User Id" },
    created_at: { path: "created_at", name: "Created" },
  };

  return (
    <div className="admin-list">
      <div className="container">
        <BackBtn />
        <div className="admin-list__inner">
          {sortedReviews.length !== 0 ? (
            <Table
              selectedSort={sortBy}
              columns={columns}
              onSort={handleSort}
              data={sortedReviews}
            />
          ) : (
            <div className="admin-list__empty">There is no items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
