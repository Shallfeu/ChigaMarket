import React, { useEffect, useState } from "react";
// Libs
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// Components
import RadioField from "../common/Form/RadioField";
import TextField from "../common/Form/TextField";
import { getUserById } from "../../store/usersSlice/selectors";
import { getCurrentUserId } from "../../store/authSlice/selectors";
import Loader from "../common/Loader";
import { UpdateData } from "../../store/usersSlice/actions";

interface dataState {
  email: string;
  name: string;
  sex: string;
}

const PersonalData: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));
  const dispatch = useAppDispatch();

  const [data, setData] = useState<dataState>({
    email: currentUser?.email || "",
    name: currentUser?.name || "",
    sex: currentUser?.sex || "",
  });

  const [error, setError] = useState<{
    email?: string;
    name?: string;
    sex?: string;
  }>({});

  const validateScheme = yup.object().shape({
    sex: yup.string().required("Sex must be chosen"),

    name: yup
      .string()
      .required("Nickname is required")
      .min(3, "Name must have length more than 3"),

    email: yup
      .string()
      .required("Email is required")
      .email("Email is not correct"),
  });

  function validate() {
    validateScheme
      .validate(data)
      .then(() => setError({}))
      .catch((err) => setError({ [err.path]: err.message }));
    return Object.keys(error).length === 0;
  }

  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(error).length === 0;

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    dispatch(UpdateData({ ...data, _id: currentUser?._id || "" }));
  };

  if (!currentUser) return <Loader />;

  return (
    <div className="change">
      <h2 className="change__title">Personal Data</h2>
      <form onSubmit={handleSubmit} className="change__form">
        <img src={currentUser.image} alt="avatar" />
        <TextField
          type="text"
          label="Nickname"
          name="name"
          value={data.name}
          error={error.name ? error.name : null}
          color="blue"
          onChange={handleChange}
        />
        <RadioField
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
          ]}
          label="Choose your sex"
          value={data.sex}
          name="sex"
          color="red"
          error={error.sex ? error.sex : null}
          onChange={handleChange}
        />
        <button type="submit" disabled={!isValid} className="change__btn">
          Change
        </button>
      </form>
    </div>
  );
};

export default PersonalData;
