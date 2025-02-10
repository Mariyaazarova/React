import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useParams } from "react-router-dom";
import { Review } from "./restaurant-review";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useUpdateReviewMutation,
} from "../../redux/services/api/api";
import { useCallback } from "react";

export const RestaurantReviews = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { auth } = useAuth();

  const { data, isFetching: isGetReviewsFetching } =
    useGetReviewsByRestaurantIdQuery(id);
  useGetUsersQuery();

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
};
