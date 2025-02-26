"use client";

import { useParams } from "next/navigation";
import { useTheme } from "../../../../../components/theme-context/use-theme";
import { useAuth } from "../../../../../components/auth-context/use-auth";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useUpdateReviewMutation,
} from "../../../../../redux/services/api/api";
import styles from "./styles.module.css";
import { Review } from "../../../../../components/restaurant-reviews/restaurant-review";
import { ReviewForm } from "../../../../../components/review-form/review-form";
import { useCallback } from "react";
import classNames from "classnames";

export default function RestaurantReviews() {
  const { restaurantId: id } = useParams();
  const { theme } = useTheme();
  const { auth } = useAuth();

  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByRestaurantIdQuery(id);

  const [addReview, { isLoading: isAddReviewFetching }] =
    useAddReviewMutation(id);

  const [updateReview, { isLoading: isUpdateReviewFetching }] =
    useUpdateReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ id, review });
    },
    [addReview, id]
  );

  const handleEditReview = useCallback(
    (reviewId, updatedReview) => {
      updateReview({ reviewId, updatedReview });
    },
    [updateReview]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return "loading restaurant-reviews...";
  }

  if (isUpdateReviewFetching) {
    return "updating restaurant-reviews...";
  }

  if (!data || !data.length) {
    return null;
  }

  return (
    <div>
      <div
        className={classNames(styles.reviewsCart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        <h3>Reviews:</h3>
        <ul>
          {data.map((review) => {
            return (
              <Review
                key={review.id}
                review={review}
                handleEditReview={handleEditReview}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm onSubmit={handleAddReview} />}
      </div>
    </div>
  );
}
