import { ReviewForm } from "../review-form/review-form";
import { useAuth } from "../auth-context/use-auth";
import styles from "./restaurant-reviews.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/use-theme";
import { Reviews } from "./reviews";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const RestaurantReviews = () => {
  const { id } = useParams(); 
  const { theme } = useTheme();
  const { auth } = useAuth();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant || !restaurant.reviews) {
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
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className={styles.reviewForm}>
        {auth.isAuthorized && <ReviewForm />}
      </div>
    </div>
  );
};
