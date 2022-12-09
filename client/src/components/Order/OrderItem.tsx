import React from "react";
// Libs
import { Link } from "react-router-dom";
// Utils
import { useAppSelector } from "../../store/hooks";
import { getProductById } from "../../store/stuffSlice/selectors";
// Components
import Loader from "../common/Loader";
import ArrivalCard from "../common/ArrivalCard";

interface OrderItemProps {
  _id: string;
  quantity: number;
}

const OrderItem: React.FC<OrderItemProps> = ({ _id, quantity }) => {
  const product = useAppSelector(getProductById(_id));

  if (!product) return <Loader />;

  const { image, name } = product;

  return (
    <div key={_id} className="orders__item">
      <Link to={`/product/${_id}`}>
        <ArrivalCard image={image} name={name} value={`x${quantity}`} />
      </Link>
    </div>
  );
};

export default OrderItem;
