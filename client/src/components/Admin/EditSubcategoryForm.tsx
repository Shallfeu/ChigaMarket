import React, { useState } from "react";
// Libs
import { toast } from "react-toastify";
// Utils
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllCategories } from "../../store/categoriesSlice/selectors";
import {
  CreateSubcategory,
  DeleteSubcategory,
} from "../../store/categoriesSlice/actions";
// Components
import Loader from "../common/Loader";
import SelectField from "../common/Form/SelectField";
import TextField from "../common/Form/TextField";

interface dataState {
  category: string;
  newSub: string;
}

const EditSubcategoryForm: React.FC = () => {
  const categories = useAppSelector(getAllCategories);
  const dispatch = useAppDispatch();

  const initialState = {
    newSub: "",
    category: "",
  };

  const [data, setData] = useState<dataState>(initialState);

  if (!categories) return <Loader />;

  const selectArray = categories.map((el) => ({
    label: el.category,
    value: el._id,
  }));

  const selectedCategory = data.category
    ? categories.find((cat) => cat._id === data.category)
    : null;

  const handleChange = (target: { name: string; value: string }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      CreateSubcategory({ category: data.category, subcategory: data.newSub })
    )
      .unwrap()
      .then(() => {
        toast.success("Subcategory has been created");
        setData((prevState) => ({
          ...prevState,
          newSub: "",
        }));
      })
      .catch((error: string) => {
        toast.error(error);
      });
  };

  const handleDelete = (_id: string) => {
    const newCategories = selectedCategory?.subcategories.filter(
      (el) => el._id !== _id
    );

    dispatch(
      DeleteSubcategory({
        category: data.category,
        subcategories: newCategories,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Subcategory has been deleted");
      })
      .catch((er: string) => {
        toast.error(er);
      });
  };

  return (
    <div className="subcategory">
      <div className="subcategory__inner">
        <h2 className="subcategory__title">Edit categories</h2>

        {selectedCategory && (
          <div className="subcategory__items">
            {selectedCategory.subcategories.map((cat) => (
              <div className="subcategory__item" key={cat._id}>
                {cat.category}

                <button
                  type="button"
                  className="subcategory__delete"
                  onClick={() => handleDelete(cat._id)}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="subcategory__form">
          <SelectField
            label="Category"
            value={data.category}
            onChange={handleChange}
            name="category"
            defaultOption="Choose address to get your order"
            options={selectArray}
            error={null}
          />

          <TextField
            type="text"
            label="New subcategory"
            name="newSub"
            value={data.newSub}
            error={null}
            color="black"
            onChange={handleChange}
          />

          <button type="submit" disabled={!data.newSub} className="login__btn">
            Create Subcategory
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSubcategoryForm;
