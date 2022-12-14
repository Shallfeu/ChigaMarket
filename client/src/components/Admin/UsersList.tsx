import React, { useState } from "react";
// Libs
import _ from "lodash";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getUsers } from "../../store/usersSlice/selectors";
// Components
import Loader from "../common/Loader";
import Table from "../common/Table/index";
import BackBtn from "../common/BackBtn";

const UsersList: React.FC = () => {
  const users = useAppSelector(getUsers);
  const [sortBy, setSortBy] = useState<{
    path: string;
    order: "asc" | "desc";
  }>({
    path: "string",
    order: "asc",
  });

  if (!users) return <Loader />;

  const handleSort = (item: { path: string; order: "asc" | "desc" }) =>
    setSortBy(item);

  const sortedUsers = _.orderBy(users, [sortBy.path], sortBy.order);

  const columns = {
    index: { path: "", name: "№" },
    avatar: { path: "", name: "Avatar" },
    name: { path: "name", name: "Name" },
    email: { path: "email", name: "Email" },
    sex: { path: "sex", name: "Sex" },
    createdAt: { path: "createdAt", name: "Created" },
  };

  return (
    <div className="admin-list">
      <div className="container">
        <BackBtn />
        <div className="admin-list__inner">
          {sortedUsers.length !== 0 ? (
            <Table
              selectedSort={sortBy}
              columns={columns}
              onSort={handleSort}
              data={sortedUsers}
            />
          ) : (
            <div className="admin-list__empty">There is no items</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
