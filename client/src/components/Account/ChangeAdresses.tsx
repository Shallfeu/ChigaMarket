import React, { useState, useEffect } from "react";
// Libs
import * as yup from "yup";
// Components
import TextField from "../common/Form/TextField";
// Utils
import { getCurrentUserId } from "../../store/authSlice/selectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserById } from "../../store/usersSlice/selectors";
import Loader from "../common/Loader";
import { UpdateData } from "../../store/usersSlice/actions";

const ChangeAdresses: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));

  const dispatch = useAppDispatch();

  const [data, setData] = useState<{ address: string }>({
    address: "",
  });

  const [error, setError] = useState<{
    address?: string;
  }>({});

  const validateScheme = yup.object().shape({
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
    if (currentUser) {
      const newAddresses = new Array(...currentUser.adresses);
      newAddresses.push(data.address);

      dispatch(
        UpdateData({
          _id: currentUser._id,
          adresses: newAddresses,
        })
      );

      setData({
        address: "",
      });
    }
  };

  const handleDelete = (address: string) => {
    if (currentUser) {
      const newAddresses = currentUser.adresses.filter(
        (el: string) => el !== address
      );

      dispatch(
        UpdateData({
          _id: currentUser._id,
          adresses: newAddresses,
        })
      );
    }
  };

  if (!currentUser) return <Loader />;

  return (
    <div className="address">
      <h2 className="change__title">Addresses</h2>
      <div className="address__inner">
        <ul className="address__list">
          {currentUser.adresses.map((address, index) => (
            <li key={address} className="address__item">
              {index + 1}. {address}
              <button
                type="button"
                className="address__item-btn"
                onClick={() => handleDelete(address)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="address__form">
          <TextField
            type="text"
            label="New Address"
            name="address"
            value={data.address}
            error={error.address ? error.address : null}
            color="blue"
            onChange={handleChange}
          />

          <button type="submit" disabled={!isValid} className="change__btn">
            Add New Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeAdresses;
