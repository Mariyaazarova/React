import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "./reviews-list";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";

export const RestaurantReviews = ({ reviews }) => {
  const { theme } = useTheme();

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
        <ReviewForm />
      </div>
    </div>
  );
};
