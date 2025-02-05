import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewsByIds } from "../../redux/entities/reviews/reviews-slice";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { useRequest } from "../../redux/hooks/use-request";
import { REQUESR_STATUSES } from "../../redux/consts";

export const RestaurantReviews = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { auth } = useAuth();
  const requestStatus = useRequest(getReviews);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant || !restaurant.reviews) {
    return null;
  }

  const reviews = useSelector((state) =>
    selectReviewsByIds(state, restaurant.reviews)
  );

  const renderReviews = () => {
    if (reviews) {
      return (
        <>
          <h3>Reviews:</h3>
          <ul>
            {reviews.filter(Boolean).map((review) => (
              <Review key={review.id} review={review} />
            ))}
          </ul>
        </>
      );
    } else if (requestStatus === REQUESR_STATUSES.PENDING) {
      return <div>Loading...</div>;
    } else {
      return <div>Ничего не найдено</div>;
    }
  };

  return (
    <div>
      <div
        className={classNames(styles.reviewsCart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        {renderReviews()}
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </div>
  );
};
