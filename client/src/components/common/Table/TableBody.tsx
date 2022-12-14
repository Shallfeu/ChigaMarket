import React from "react";
// Libs
import { Link } from "react-router-dom";
// Utils
import { IUser } from "../../../store/usersSlice/slice";
import { date } from "../../../utils/date";
import config from "../../../config.json";

type TableBodyProps = {
  data: IUser[];
  columns: any;
};

const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  const renderImage = (check: string, src: string) => {
    const img =
      check === "avatar" ? (
        <img
          className="table-img"
          src={`${config.avatarEndPoint}/${src}`}
          alt="avatar"
          key={src}
        />
      ) : (
        <img className="table-img" src={src} alt="avatar" key={src} />
      );

    return img;
  };

  return (
    <tbody className="table-content">
      {data.map((item: any, index) => (
        <tr className="table-row" key={item._id}>
          {Object.keys(columns).map((column: string) => (
            <>
              {column === "avatar" ? (
                <td key={item._id} className="table-data">
                  {item?.avatar
                    ? renderImage("avatar", item.avatar)
                    : renderImage("image", item.image)}
                </td>
              ) : column === "image" ? (
                <Link className="table-link" to={`/admin/${item._id}`}>
                  <img
                    className="table-img"
                    src={`${config.productEndPoint}/${item.image}`}
                    alt="avatar"
                    key={item.image}
                  />
                </Link>
              ) : (
                <td key={item._id} className="table-data">
                  {column === "createdAt" || column === "created_at"
                    ? date(item[column])
                    : column === "index"
                    ? index + 1
                    : item[column]}
                </td>
              )}
            </>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
