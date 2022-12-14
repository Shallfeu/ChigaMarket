import React, { useState, useEffect } from "react";
// Libs
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
// Components
import TextField from "../common/Form/TextField";
import Loader from "../common/Loader";
import SelectField from "../common/Form/SelectField";
import ProductImage from "./ProductImage";
import TextAreaField from "../common/Form/TextAreaField";
// Utils
import { getAllCategories } from "../../store/categoriesSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  CreateProduct,
  DeleteProduct,
  UpdateProduct,
} from "../../store/stuffSlice/actions";
import { getProductById } from "../../store/stuffSlice/selectors";

interface dataState {
  name: string;
  price: string;
  discount?: string;
  description?: string;
  brand: string;
  category: string;
  subcategory: string;
  extra?: string;
}

const ProductForm: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [pic, setPic] = useState<any>(null);
  const categories = useAppSelector(getAllCategories);
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductById(productId as any));
  const [data, setData] = useState<dataState>({
    name: "",
    price: "",
    discount: "",
    brand: "",
    description: "",
    category: "",
    subcategory: "",
    extra: "",
  });

  const [error, setError] = useState<{
    name?: string;
    price?: string;
    discount?: string;
    description?: string;
    brand?: string;
    category?: string;
    subcategory?: string;
    extra?: string;
  }>({});

  const validateScheme = yup.object().shape({
    subcategory: yup.string().required("Subcategory is required"),

    category: yup.string().required("Category is required"),

    price: yup.string().required("Price is required"),

    brand: yup.string().required("Brand is required"),

    name: yup.string().required("Product name is required"),
  });

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setError({}))
      .catch((err) => setError({ [err.path]: err.message }));
    return Object.keys(error).length === 0;
  };

  const isValid = Object.keys(error).length === 0;

  useEffect(() => {
    if (product) {
      setData({ ...(product as any) });
    }
  }, []);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (target: any) => {
    if (target.name === "category") {
      setData((prevState) => ({ ...prevState, subcategory: "" }));
    }

    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    if (productId) {
      dispatch(
        UpdateProduct({
          ...data,
          category: data.category?.toLowerCase(),
          subcategory: data.subcategory?.toLowerCase(),
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Product has been edited");
          navigate("/admin/products");
        })
        .catch((er) => {
          toast.error(er);
        });
    } else {
      dispatch(
        CreateProduct({
          data: {
            ...data,
            category: data.category?.toLowerCase(),
            subcategory: data.subcategory?.toLowerCase(),
          },
          image: pic,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Product has been created");
          navigate("/admin/products");
        })
        .catch((er) => {
          toast.error(er);
        });
    }
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product")) {
      dispatch(DeleteProduct(productId))
        .unwrap()
        .then(() => {
          toast.success("Product has been deleted");
          navigate("/admin/products");
        })
        .catch((er) => {
          toast.error(er);
        });
    }
  };

  if (!categories) return <Loader />;

  const selectCategory = categories?.map((el) => ({
    label: el.category,
    value: el.category,
  }));

  const selectedArray = data.category
    ? categories.find(
        (el) => el.category.toLowerCase() === data.category?.toLowerCase()
      )?.subcategories
    : [];

  const selectSubcategory = selectedArray?.map((el) => ({
    label: el.category,
    value: el.category,
  }));

  return (
    <div className="edit-product">
      <form onSubmit={handleSubmit} className="edit-product__form">
        <h2 className="edit-product__title">Edit Product</h2>
        <ProductImage image={pic ? pic : product?.image} setImage={setPic} />

        <TextField
          label="Product Name"
          name="name"
          value={data.name}
          error={error.name ? error.name : null}
          color="black"
          onChange={handleChange}
        />

        <TextField
          label="Brand"
          name="brand"
          value={data.brand}
          error={error.brand ? error.brand : null}
          color="black"
          onChange={handleChange}
        />

        <TextAreaField
          label="Description"
          name="description"
          value={data.description ? data.description : ""}
          rows={4}
          error={null}
          onChange={handleChange}
        />

        <TextField
          label="Price"
          name="price"
          value={data.price}
          error={error.price ? error.price : null}
          color="black"
          onChange={handleChange}
        />

        <TextField
          label="Discount"
          name="discount"
          value={data.discount ? data.discount : ""}
          error={error.discount ? error.discount : null}
          color="black"
          onChange={handleChange}
        />

        <SelectField
          label="Category"
          value={data.category}
          onChange={handleChange}
          name="category"
          defaultOption="Choose category"
          options={selectCategory}
          error={error.category ? error.category : null}
        />

        <SelectField
          label="Subcategory"
          value={data.subcategory}
          onChange={handleChange}
          name="subcategory"
          defaultOption="Choose subcategory"
          options={selectSubcategory ? selectSubcategory : []}
          error={error.subcategory ? error.subcategory : null}
        />

        <TextField
          label="Extra cetegory"
          name="extra"
          value={data.extra ? data.extra : ""}
          error={error.extra ? error.extra : null}
          color="black"
          onChange={handleChange}
        />

        <button type="submit" disabled={!isValid} className="edit-product__btn">
          <span>Edit</span>
        </button>
        {productId && (
          <button
            type="button"
            className="edit-product__btn"
            onClick={handleDelete}
          >
            <span>Delete</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default ProductForm;
