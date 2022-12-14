import React, { useEffect } from "react";
// Libs
import { toast } from "react-toastify";
import { orderBy } from "lodash";
import { Link, useLocation, useParams } from "react-router-dom";
// Utils
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getReviews } from "../../../store/reviewSlice/selectors";
import {
  CreateReview,
  DeleteReview,
  loadReviews,
} from "../../../store/reviewSlice/actions";
import { getCurrentUserId } from "../../../store/authSlice/selectors";
// Components
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

const Reviews: React.FC = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const curretUserId = useAppSelector(getCurrentUserId);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    dispatch(loadReviews(productId || ""));
  }, [productId]);

  const handleSubmit = (data: { content: string }) => {
    dispatch(CreateReview({ pageId: productId, ...data }))
      .unwrap()
      .then(() => {
        toast.success("Review has been created");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleDelete = (reviewId: string) => {
    dispatch(DeleteReview(reviewId))
      .unwrap()
      .then(() => {
        toast.success("Review has been deleted");
      })
      .catch((e) => {
        toast.error(e.message);
      });
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
          <Link
            className="reviews__login-btn"
            to="/auth/login"
            state={{ referrer: location }}
          >
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
