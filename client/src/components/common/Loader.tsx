import React, { CSSProperties } from "react";
// Libs
import { GridLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
};

const Loader: React.FC = () => {
  return (
    <div className="sweet-loading">
      <GridLoader
        color="#36d7b7"
        loading
        cssOverride={override}
        size="30px"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
