import React from "react";
// Libs
import { Link } from "react-router-dom";
// Components
import Loader from "../common/Loader";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getAllCategories } from "../../store/categoriesSlice/selectors";

const Categories: React.FC = () => {
  const categories = useAppSelector(getAllCategories);

  if (!categories) return <Loader />;

  return (
    <div className="categories">
      {categories.map((value) => (
        <Link
          key={value._id}
          to={`/all-categories/${value.category.toLowerCase()}`}
        >
          <div className="categories__box" key={value._id}>
            <img className="box__img" src={value.image} alt="category" />
            <span className="box__title">{value.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
