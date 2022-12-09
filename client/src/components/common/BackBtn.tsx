import React from "react";
// Libs
import { useNavigate } from "react-router-dom";

const BackBtn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button type="button" className="btn-back" onClick={() => navigate(-1)}>
      <i className="bi bi-caret-left"></i>Back
    </button>
  );
};

export default BackBtn;
