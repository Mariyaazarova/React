import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import { Reviews } from "./reviews";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectReviewsByIds } from "../../redux/entities/reviews/reviews-slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const RestaurantReviews = () => {
  const { restaurantId } = useParams();
  const { theme } = useTheme();
  const { auth } = useAuth();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { reviews: reviewIds } = restaurant;
  const reviews = useSelector((state) => selectReviewsByIds(state, reviewIds));

  return (
    <div>
      <div
        className={classNames(styles.reviewsCart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        <h3>Reviews:</h3>
        <div>{!!reviews.length && <Reviews reviews={reviews} />}</div>
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </div>
  );
};
