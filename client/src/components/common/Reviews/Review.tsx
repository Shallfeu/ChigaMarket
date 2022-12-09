import React from "react";
// Utils
import { date } from "../../../utils/date";
import { useAppSelector } from "../../../store/hooks";
import { getUserById } from "../../../store/usersSlice/selectors";
// Components
import Loader from "../Loader";
import { getCurrentUserId } from "../../../store/authSlice/selectors";

type ReviewProps = {
  userId: string;
  _id: string;
  time: number;
  content: string;
  onDelete: (commentId: string) => void;
};

const Review: React.FC<ReviewProps> = ({
  userId,
  _id,
  time,
  content,
  onDelete,
}) => {
  const currentUserId = useAppSelector(getCurrentUserId);
  const user = useAppSelector(getUserById(userId));

  if (!user) return <Loader />;

  return (
    <div className="review">
      <div className="review__user">
        <img src={user.image} className="review__img" alt="avatar" />
        <div className="review__info">
          <h4 className="review__name">{user.name}</h4>
          <span className="review__time"> - {date(time)}</span>
        </div>
      </div>

      <p className="review__content">{content}</p>

      {currentUserId === userId && (
        <button
          type="button"
          className="review__delete"
          onClick={() => onDelete(_id)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
      )}
    </div>
  );
};

export default Review;
