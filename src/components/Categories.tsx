import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

type Category = {
  id: string;
  cateImg: string;
  cateName: string;
};

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    API.categories.fetchAll().then((data) =>
      setCategories(
        data.map((item: { id: string; cateImg: string; cateName: string }) => ({
          id: item.id,
          cateImg: item.cateImg,
          cateName: item.cateName,
        }))
      )
    );
  }, []);

  if (!categories) return <>Loading...</>;

  return (
    <div className="categories">
      {categories.map((value) => (
        <Link to={`/all-categories/${value.cateName.toLowerCase()}`}>
          <div className="categories__box" key={value.id}>
            <img className="box__img" src={value.cateImg} alt="category" />
            <span className="box__title">{value.cateName}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
