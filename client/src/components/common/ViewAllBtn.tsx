import React from "react";
// Libs
import { Link } from "react-router-dom";

interface ViewAllBtnProps {
  direction: string;
}

const ViewAllBtn: React.FC<ViewAllBtnProps> = ({ direction }) => {
  return (
    <Link to={`/all-categories/${direction}`}>
      <button className="viewall-btn" type="button">
        View all<i className="bi bi-caret-right-fill"></i>
      </button>
    </Link>
  );
};

export default ViewAllBtn;
