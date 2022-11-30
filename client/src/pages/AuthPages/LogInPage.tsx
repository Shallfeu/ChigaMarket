import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Libs
import * as yup from "yup";
// Components
import CheckBoxField from "../../components/common/Form/CheckBoxField";
import TextField from "../../components/common/Form/TextField";

interface dataState {
  email: string;
  password: string;
  stayOn: boolean;
}

const LogInPage: React.FC = () => {
  const [data, setData] = useState<dataState>({
    email: "",
    password: "",
    stayOn: false,
  });

  const [error, setError] = useState<{
    email?: string;
    password?: string;
    manyAttempts?: string;
  }>({});

  // const dispatch = useAppDispatch();

  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .matches(/[A-Z]+/g, "Password must have more than 1 capital letter")
      .matches(/\d+/g, "Password mush have more than 1 digit")
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must have special symbols (!@#$%^&*)"
      )
      .matches(/(?=.{8,})/, "Password must have length more than 8"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not correct"),
  });

  // const loginError = useAppSelector(getAuthErrors);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    // const redirect = history?.location?.state?.from?.pathname;
    // dispatch(signIn({ ...data, redirect }));
    console.log(data);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__inner">
          <div className="login__box">
            <form onSubmit={handleSubmit} className="login__form">
              <h2 className="login__title">Log In</h2>

              <TextField
                type="text"
                label="Email"
                name="email"
                value={data.email}
                error={error.email ? error.email : null}
                color="blue"
                onChange={handleChange}
              />

              <TextField
                type="password"
                label="Password"
                name="password"
                value={data.password}
                error={error.password ? error.password : null}
                color="blue"
                onChange={handleChange}
              />

              <CheckBoxField
                name="stayOn"
                value={data.stayOn}
                color="blue"
                onChange={handleChange}
              >
                Stay in
              </CheckBoxField>

              {/* {loginError ? <p className="text-danger">{loginError}</p> : ""} */}

              <button type="submit" disabled={!isValid} className="login__btn">
                Submit
              </button>

              <span className="login__signup">
                Don&apos;t have account? <Link to="/auth/signup">Sign Up</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
