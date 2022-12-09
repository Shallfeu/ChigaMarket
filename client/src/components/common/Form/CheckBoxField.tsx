import React, { ReactNode } from "react";

type CheckBoxFieldProps = {
  name: string;
  value: boolean;
  onChange: (e: any) => void;
  children?: ReactNode | JSX.Element;
  color: string;
  error?: string | null;
};

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  name,
  value,
  onChange,
  children,
  color,
  error,
}) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <div className={`check-${color}`}>
      <input
        className={`check-${color}__input`}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className={`check-${color}__box`} htmlFor="flexCheckDefault">
        {children}
      </label>
      {error && <div className="invalid">{error}</div>}
    </div>
  );
};

export default CheckBoxField;
