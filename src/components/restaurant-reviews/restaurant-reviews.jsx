import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useParams } from "react-router-dom";
import { Review } from "./review";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
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
    useAddReviewMutation();

  const handleAddReview = useCallback(
    (review) => {
      addReview({ id, review });
    },
    [addReview, id]
  );

  if (isGetReviewsFetching || isAddReviewFetching) {
    return "...loading";
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
            return <Review key={review.id} review={review} />;
          })}
        </ul>
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm onSubmit={handleAddReview} />}
      </div>
    </div>
  );
};
