import React from "react";
// Components
import BackBtn from "../common/BackBtn";
import ProductForm from "./ProductForm";

const AdminForm: React.FC = () => {
  return (
    <div className="merchandise">
      <div className="container">
        <div className="merchandise__inner">
          <BackBtn />

          <div className="merchandise__main">
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
