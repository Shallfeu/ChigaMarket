import { useState } from "react";

function useToggle(initialValue: boolean) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}

export { useToggle };
