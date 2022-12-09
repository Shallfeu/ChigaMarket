import React, { useEffect, useState } from "react";
// Libs
import * as yup from "yup";
// Components
import TextAreaField from "../Form/TextAreaField";

type dataState = {
  content: string;
};

type ReviewFormProps = {
  onSubmit: (data: { content: string }) => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<dataState>({ content: "" });

  const [errors, setErrors] = useState<{
    content?: string;
  }>({});

  const validateScheme = yup.object().shape({
    content: yup
      .string()
      .required("If you want leave review, it shouldn't be empty"),
  });

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (target: any) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const clearArea = () => {
    setData({ content: "" });
    setErrors({});
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    if (data) onSubmit(data);
    clearArea();
  };

  return (
    <form onSubmit={handleSubmit} className="reviews__form">
      <TextAreaField
        label="Your Review"
        name="content"
        rows={4}
        value={data?.content || ""}
        error={errors.content ? errors.content : null}
        onChange={handleChange}
      />

      <button type="submit" disabled={!isValid} className="addToCart">
        Send
      </button>
    </form>
  );
};

export default ReviewForm;
