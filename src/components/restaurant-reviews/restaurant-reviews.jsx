import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "./reviews-list";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";

export const RestaurantReviews = ({ restaurant, viewVariant = "light" }) => {
  const { reviews } = restaurant;
  return (
    <div>
      <div
        className={classNames(styles.reviewsCart, {
          [styles.light]: viewVariant === "light",
          [styles.dark]: viewVariant === "dark",
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
