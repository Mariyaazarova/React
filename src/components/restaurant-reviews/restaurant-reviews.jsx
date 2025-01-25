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

export const RestaurantReviews = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { auth } = useAuth();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant || !restaurant.reviews) {
    return null;
  }

  const reviews = useSelector((state) =>
    selectReviewsByIds(state, restaurant.reviews)
  );

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
          {reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ul>
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </div>
  );
};
