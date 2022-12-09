import React, { useState, useEffect } from "react";
// Libs
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
// Utils
import { getCurrentUserId } from "../../store/authSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserById } from "../../store/usersSlice/selectors";
// Components
import Loader from "../common/Loader";
import SelectField from "../common/Form/SelectField";
import TextField from "../common/Form/TextField";
// Types
import { CartItem } from "../../store/cartSlice/slice";
import { createOrder } from "../../store/ordersSlice/actions";
import { ClearCart } from "../../store/cartSlice/actions";

interface OrderFormProps {
  products: CartItem[];
  totalCost: number;
}

const OrderForm: React.FC<OrderFormProps> = ({ products, totalCost }) => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState<{
    address: string;
    userName: string;
  }>({
    address: "",
    userName: "",
  });

  const [error, setError] = useState<{
    address?: string;
    userName?: string;
    danger?: string;
  }>({});

  const validateScheme = yup.object().shape({
    userName: yup.string().required("Name is required"),
    address: yup.string().required("Address is required"),
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
    validate();
  }, [data]);

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    dispatch(createOrder({ products, totalCost, ...data }))
      .unwrap()
      .then(() => {
        dispatch(ClearCart());
        navigate("/account");
      })
      .catch((er) => setError({ danger: er }));
  };

  if (!currentUser) return <Loader />;

  const selectArray = currentUser.adresses.map((el) => ({
    label: el,
    value: el,
  }));

  return (
    <div className="order">
      <div className="order__inner">
        <h2 className="order__title">Your order</h2>

        <form onSubmit={handleSubmit} className="order__form">
          <div className="order__products">
            {products.map((product) => (
              <div className="order__product" key={product._id}>
                <img
                  src={product.image}
                  alt="product"
                  className="order__product-img"
                />
                <span className="order__product-name">{product.name}</span>
                <span className="order__product-name">x{product.quantity}</span>
              </div>
            ))}
          </div>

          <SelectField
            label="Address"
            value={data.address}
            onChange={handleChange}
            name="address"
            defaultOption="Choose address to get your order"
            options={selectArray}
            error={error.address ? error.address : null}
          />

          <TextField
            type="text"
            label="Name who get this order:"
            name="userName"
            value={data.userName}
            error={error.userName ? error.userName : null}
            color="blue"
            onChange={handleChange}
          />

          <h4 className="order__cost">
            Total Cost of your order: ${totalCost}
          </h4>

          <button type="submit" disabled={!isValid} className="login__btn">
            Create Order
          </button>
          {error.danger ? <div className="invalid">{error.danger}</div> : ""}
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
