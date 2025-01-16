import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import { Reviews } from "./reviews";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export const RestaurantReviews = ({ reviews }) => {
  const { theme } = useTheme();
  const { auth } = useAuth();

  return (
    <div>
      <div
        className={classNames(styles.reviewsCart, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        <h3>Reviews:</h3>
        <div>
          <div>{!!reviews.length && <Reviews reviews={reviews} />}</div>
        </div>
      </div>

      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </div>
  );
};
