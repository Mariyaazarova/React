import { useSelector } from "react-redux";

import { selectReviewsByIds } from "../../redux/entities/reviews/reviews-slice";
import { useParams } from "react-router-dom";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { Review } from "./review";

export const Reviews = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const reviews = useSelector((state) =>
    selectReviewsByIds(state, restaurant.reviews)
  );

  return (
    <ul>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
};
