import React from "react";
// Components
import Review from "./Review";
// Types
import { IReview } from "../../../store/reviewSlice/slice";

type ReviewsListProps = {
  reviews: IReview[];
  onDelete: (id: string) => void;
};

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews, onDelete }) => {
  return (
    <>
      {reviews.map((review) => (
        <Review
          key={review._id}
          _id={review._id}
          onDelete={onDelete}
          userId={review.userId}
          time={review.created_at}
          content={review.content}
        />
      ))}
    </>
  );
};

export default ReviewsList;
