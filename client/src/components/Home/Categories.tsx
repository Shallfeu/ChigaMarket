import React from "react";
// Libs
import { Link } from "react-router-dom";
//
import categories from "../../mock/categories.json";
// Components
import Loader from "../common/Loader";

const Categories: React.FC = () => {
  if (!categories) return <Loader />;

  return (
    <div className="categories">
      {categories.map((value) => (
        <Link
          key={value.id}
          to={`/all-categories/${value.general.toLowerCase()}`}
        >
          <div className="categories__box" key={value.id}>
            <img className="box__img" src={value.image} alt="category" />
            <span className="box__title">{value.general}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
