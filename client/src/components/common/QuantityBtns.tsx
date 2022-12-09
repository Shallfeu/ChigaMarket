import React from "react";
// Utils
import { useAppDispatch } from "../../store/hooks";
import { addToCart, DecreaseItem } from "../../store/cartSlice/actions";

interface QuantityBtnsProps {
  _id: string;
  quantity: number;
}

const QuantityBtns: React.FC<QuantityBtnsProps> = ({ _id, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="quantity">
      <button
        type="button"
        className="quantity__button left"
        disabled={quantity < 2}
        onClick={() => dispatch(DecreaseItem(_id))}
      >
        <i className="quantity__i bi bi-dash-lg"></i>
      </button>
      <span className="quantity__value">{quantity ?? 0}</span>
      <button
        type="button"
        className="quantity__button right"
        onClick={() => dispatch(addToCart(_id))}
      >
        <i className="quantity__i bi bi-plus-lg"></i>
      </button>
    </div>
  );
};

export default QuantityBtns;
