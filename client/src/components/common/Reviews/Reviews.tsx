import React, { useEffect } from "react";
// Libs
import { orderBy } from "lodash";
import { Link, useParams } from "react-router-dom";
// Utils
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getReviews } from "../../../store/reviewSlice/selectors";
import {
  createReview,
  deleteReview,
  loadReviews,
} from "../../../store/reviewSlice/actions";
// Components
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import { getCurrentUserId } from "../../../store/authSlice/selectors";

const Reviews: React.FC = () => {
  const { productId } = useParams();
  const curretUserId = useAppSelector(getCurrentUserId);

  const dispatch = useAppDispatch();

  const reviews = useAppSelector(getReviews());

  useEffect(() => {
    dispatch(loadReviews(productId || ""));
  }, [productId]);

  const handleSubmit = (data: { content: string }) => {
    dispatch(createReview({ pageId: productId, ...data }));
  };

  const handleDelete = (reviewId: string) => {
    dispatch(deleteReview(reviewId));
  };

  const sortedReviews = orderBy(reviews, ["created_at"], ["desc"]);

  return (
    <div className="reviews">
      {curretUserId ? (
        <ReviewForm onSubmit={handleSubmit} />
      ) : (
        <div className="reviews__login">
          <p className="reviews__login-text">If you want to leave a comment,</p>
          <p className="reviews__login-text">enter your account</p>
          <Link className="reviews__login-btn" to="/auth/login">
            Login
          </Link>
        </div>
      )}

      <div className="reviews__list">
        <h5 className="reviews__title">Reviews</h5>
        {sortedReviews.length > 0 ? (
          <ReviewsList reviews={sortedReviews} onDelete={handleDelete} />
        ) : (
          <div className="reviews__quote">
            There is no reviews yet, you can be the first one who share his
            opinion with others :)
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
