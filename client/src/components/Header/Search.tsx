import React from "react";
// Libs
import { NavLink } from "react-router-dom";
// Components

const Search: React.FC = () => {
  return (
    <section className="search">
      <form className="search__box">
        <i className="bi bi-search search__icon"></i>
        <input
          className="search__input"
          type="text"
          placeholder="Search and hit enter..."
        />
        <NavLink to="/all-categories">
          <button type="button" className="search__btn">
            All Categories
          </button>
        </NavLink>
      </form>
    </section>
  );
};

export default Search;
