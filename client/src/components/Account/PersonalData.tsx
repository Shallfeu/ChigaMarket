import React, { useEffect, useState } from "react";
// Libs
import { toast } from "react-toastify";
import * as yup from "yup";
// Components
import RadioField from "../common/Form/RadioField";
import TextField from "../common/Form/TextField";
import Loader from "../common/Loader";
import Avatar from "../Avatar";
// Utils
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserById } from "../../store/usersSlice/selectors";
import { getCurrentUserId } from "../../store/authSlice/selectors";
import { UpdateUserData } from "../../store/usersSlice/actions";

interface dataState {
  email: string;
  name: string;
  sex: string;
}

interface errorState {
  email?: string;
  name?: string;
  sex?: string;
  auth?: string;
}

const PersonalData: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const currentUser = useAppSelector(getUserById(currentUserId));
  const dispatch = useAppDispatch();

  const initialState = {
    email: currentUser?.email || "",
    name: currentUser?.name || "",
    sex: currentUser?.sex || "",
  };

  const [data, setData] = useState<dataState>(initialState);

  const [error, setError] = useState<errorState>({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const isValid = Object.keys(error).length === 0;

  const handleChange = (target: { name: string; value: string }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    dispatch(UpdateUserData({ ...data, _id: currentUser?._id || "" }))
      .unwrap()
      .then(() => toast.success("Personal Data has been edit successfully"))
      .catch((error: string) => {
        toast.error("Some problem occured");
        setError({ auth: error });
      });
  };

  if (!currentUser) return <Loader />;

  return (
    <div className="change">
      <h2 className="change__title">Personal Data</h2>
      <form onSubmit={handleSubmit} className="change__form">
        <Avatar currentUser={currentUser} />

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

        {error.auth ? <div className="invalid">{error?.auth}</div> : ""}
      </form>
    </div>
  );
};

export default PersonalData;
