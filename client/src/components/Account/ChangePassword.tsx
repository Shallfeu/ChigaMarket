import React, { useEffect, useState } from "react";
// Libs
import * as yup from "yup";
import { toast } from "react-toastify";
// Components
import TextField from "../common/Form/TextField";
// Utils
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { UpdateUserPassword } from "../../store/usersSlice/actions";
import { getCurrentUserId } from "../../store/authSlice/selectors";

interface dataState {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

const ChangePassword: React.FC = () => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const dispatch = useAppDispatch();

  const [data, setData] = useState<dataState>({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const [error, setError] = useState<{
    oldPassword?: string;
    newPassword?: string;
    repeatNewPassword?: string;
    auth?: string;
  }>({});

  const clearFields = () => {
    setData({
      oldPassword: "",
      newPassword: "",
      repeatNewPassword: "",
    });
  };

  const validateScheme = yup.object().shape({
    repeatNewPassword: yup
      .string()
      .required("Password is required")
      .matches(/[A-Z]+/g, "Password must have more than 1 capital letter")
      .matches(/\d+/g, "Password mush have more than 1 digit")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must have special symbols (!@#$%^&*)"
      )
      .matches(/(?=.{8,})/, "Password must have length more than 8"),

    newPassword: yup
      .string()
      .required("Password is required")
      .matches(/[A-Z]+/g, "Password must have more than 1 capital letter")
      .matches(/\d+/g, "Password mush have more than 1 digit")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must have special symbols (!@#$%^&*)"
      )
      .matches(/(?=.{8,})/, "Password must have length more than 8"),

    oldPassword: yup
      .string()
      .required("Password is required")
      .matches(/[A-Z]+/g, "Password must have more than 1 capital letter")
      .matches(/\d+/g, "Password mush have more than 1 digit")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must have special symbols (!@#$%^&*)"
      )
      .matches(/(?=.{8,})/, "Password must have length more than 8"),
  });

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setError({}))
      .then(() => {
        if (data.newPassword !== data.repeatNewPassword) {
          setError({ repeatNewPassword: "Passwords should be equal" });
        }
      })
      .catch((err) => setError({ [err.path]: err.message }));

    return Object.keys(error).length === 0;
  };

  const isValid = Object.keys(error).length === 0;

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    if (currentUserId)
      dispatch(
        UpdateUserPassword({
          _id: currentUserId,
          password: data.oldPassword,
          newPassword: data.newPassword,
        })
      )
        .unwrap()
        .then(() => {
          toast.success("Password has been edit successfully");
          clearFields();
        })
        .catch((er: string) => {
          toast.error("Some problem occured");
          setError({ auth: er });
        });
  };

  return (
    <div className="change">
      <h2 className="change__title">Change Password</h2>

      <form onSubmit={handleSubmit} className="change__form">
        <TextField
          type="password"
          label="Old Password"
          name="oldPassword"
          value={data.oldPassword}
          error={error.oldPassword ? error.oldPassword : null}
          color="blue"
          onChange={handleChange}
        />

        <TextField
          type="password"
          label="New Password"
          name="newPassword"
          value={data.newPassword}
          error={error.newPassword ? error.newPassword : null}
          color="blue"
          onChange={handleChange}
        />

        <TextField
          type="password"
          label="Repeat New Password"
          name="repeatNewPassword"
          value={data.repeatNewPassword}
          error={error.repeatNewPassword ? error.repeatNewPassword : null}
          color="blue"
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

export default ChangePassword;
