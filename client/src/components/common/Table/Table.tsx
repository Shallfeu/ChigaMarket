import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export type TableProps = {
  data: any[];
  selectedSort: { path: string; order: "asc" | "desc" };
  columns: any;
  onSort: (item: { path: string; order: "asc" | "desc" }) => void;
  children?: JSX.Element;
};

export type ColumnProp = {
  path: string;
  name: string;
};

const Table: React.FC<TableProps> = ({
  selectedSort,
  columns,
  onSort,
  data,
  children,
}) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader
            selectedSort={selectedSort}
            columns={columns}
            onSort={onSort}
          />
          <TableBody data={data} columns={columns} key={data[0].name} />
        </>
      )}
    </table>
  );
};

export default Table;
