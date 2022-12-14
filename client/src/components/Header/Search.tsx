import React, { useState } from "react";
// Libs
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { debounce } from "lodash";
// Components
// Utils
import { useAppDispatch } from "../../store/hooks";
import { setSearchValue } from "../../store/searchSlice/slice";

const Search: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (location.pathname.split("/")[1] !== "all-categories") {
        navigate("/all-categories");
      }
      dispatch(setSearchValue(value));
    }
  };

  const handleClear = () => {
    setValue("");
    dispatch(setSearchValue(""));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setValue("");
    }
  };

  return (
    <section className="search">
      <div className="search__box">
        {value ? (
          <i
            role="button"
            className="bi bi-x-lg search__icon"
            onClick={() => handleClear()}
          ></i>
        ) : (
          <i
            role="button"
            className="bi bi-search search__icon"
            onClick={() => inputRef.current?.focus()}
          ></i>
        )}
        <input
          ref={inputRef}
          type="text"
          id="message"
          name="message"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="search__input"
          placeholder="Search and hit enter..."
        />

        <NavLink to="/all-categories">
          <button type="button" className="search__btn">
            All Categories
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Search;
