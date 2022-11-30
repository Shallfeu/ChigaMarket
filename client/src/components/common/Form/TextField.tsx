import React, { useState } from "react";

type TextFieldProps = {
  type?: string;
  label: string;
  name: string;
  value: string;
  error: string | null;
  color: string;
  onChange: (e: any) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  type = "text",
  label,
  name,
  value,
  error,
  onChange,
  color,
}) => {
  const handleChange = ({ target }: any) => {
    onChange({ name: target.name, value: target.value });
  };

  const [showPassword, setShowPassword] = useState(false);

  const getInputClasses = () => `input-${color}__box ${error ? "invalid" : ""}`;

  const toggleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  return (
    <div className={`input-${color}`}>
      <div className={`input-${color}__area`}>
        <input
          id={label}
          className={getInputClasses()}
          type={type === "text" ? "text" : showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={label}
        />
        {type === "password" && (
          <button
            type="button"
            className={`input-${color}__btn`}
            onClick={toggleShowPassword}
          >
            <i className={`bi bi-eye${!showPassword ? "-slash" : ""}`}></i>
          </button>
        )}
        {error && <div className="invalid">{error}</div>}
      </div>
    </div>
  );
};

export default TextField;