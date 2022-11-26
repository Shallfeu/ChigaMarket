import React, { useEffect, useState } from "react";
// Libs
import * as yup from "yup";
import CheckBoxField from "../../components/common/Form/CheckBoxField";
import RadioField from "../../components/common/Form/RadioField";
import TextField from "../../components/common/Form/TextField";
// import { useAppSelector, useAppDispatch } from "../../store/hooks";
// Components

interface dataState {
  email: string;
  name: string;
  password: string;
  sex: string;
  licence: false;
}

const SignUpPage: React.FC = () => {
  const [data, setData] = useState<dataState>({
    email: "",
    name: "",
    password: "",
    sex: "",
    licence: false,
  });

  const [error, setError] = useState<{
    email?: string;
    name?: string;
    password?: string;
    sex?: string;
    licence?: string;
  }>({});

  // const dispatch = useAppDispatch();

  const validateScheme = yup.object().shape({
    licence: yup.bool().oneOf([true], "You must confirm licence policy"),

    sex: yup.string().required("Sex must be chosen"),

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

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return null;
    console.log(data);
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="signup__inner">
          <div className="signup__box">
            <form onSubmit={handleSubmit} className="signup__form">
              <h2 className="signup__title">Sign In</h2>

              <TextField
                type="text"
                label="Email"
                name="email"
                value={data.email}
                error={error.email ? error.email : null}
                color="red"
                onChange={handleChange}
              />

              <TextField
                type="text"
                label="Nickname"
                name="name"
                value={data.name}
                error={error.name ? error.name : null}
                color="red"
                onChange={handleChange}
              />

              <TextField
                type="password"
                label="Password"
                name="password"
                value={data.password}
                error={error.password ? error.password : null}
                color="red"
                onChange={handleChange}
              />

              <RadioField
                options={[
                  { name: "Male", value: "male" },
                  { name: "Female", value: "female" },
                  { name: "Other", value: "other" },
                ]}
                label="Choose your sex"
                value={data.sex}
                name="sex"
                color="red"
                error={error.sex ? error.sex : null}
                onChange={handleChange}
              />

              <CheckBoxField
                name="licence"
                value={data.licence}
                color="red"
                onChange={handleChange}
                error={error.licence ? error.licence : null}
              >
                <>
                  Confirm <a>licence policy</a>
                </>
              </CheckBoxField>

              <button type="submit" disabled={!isValid} className="signup__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
