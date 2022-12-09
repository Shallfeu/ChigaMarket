import React from "react";

type SelectFieldProps = {
  label: string;
  value: string;
  onChange: (e: any) => void;
  name: string;
  defaultOption: string;
  options: { label: string; value: string }[];
  error: string | null;
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
  error,
}) => {
  const handleChange = ({ target }: any) => {
    onChange({ name: target.name, value: target.value });
  };

  const optionsArray: { label: string; value: string }[] =
    !Array.isArray(options) && typeof options === "object"
      ? Object.values(options)
      : options;

  return (
    <div className="select">
      <label htmlFor={name} className="select__label">
        {label}
      </label>
      <select
        className="select__form"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>

        {optionsArray &&
          optionsArray.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <div className="invalid">{error}</div>}
    </div>
  );
};

export default SelectField;
