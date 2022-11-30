import React from "react";

type RadioFieldProps = {
  label: string;
  value: string;
  name: string;
  options: { name: string; value: string }[];
  color: string;
  onChange: (e: any) => void;
  error: string | null;
};

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  value,
  name,
  options,
  error,
  color,
  onChange,
}) => {
  const handleChange = ({ target }: any) => {
    onChange({ name: target.name, value: target.value });
  };
  console.log(color);

  const getRadioClasses = () => `radio-${color}__box ${error ? "invalid" : ""}`;

  return (
    <div className={`radio-${color}`}>
      <label htmlFor="flexRadioDefault1" className={`radio-${color}__title`}>
        {label}
      </label>
      <div className={`radio-${color}__list`}>
        {options.map((option) => (
          <div
            key={`${option.name}_${option.value}`}
            className={getRadioClasses()}
          >
            <input
              className={`radio-${color}__input`}
              type="radio"
              name={name}
              id={`${option.name}_${option.value}`}
              value={option.value}
              checked={option.value === value}
              onChange={handleChange}
            />
            <label
              className={`radio-${color}__label`}
              htmlFor={`${option.name}_${option.value}`}
            >
              {option.name}
            </label>
          </div>
        ))}
      </div>
      {error && <div className="invalid">{error}</div>}
    </div>
  );
};

export default RadioField;
