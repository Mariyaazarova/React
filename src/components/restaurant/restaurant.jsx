import { Container } from "../container/container";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "../restaurant-reviews/restaurant-reviews";
import { useSelector } from "react-redux";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { selectReviewsByIds } from "../../redux/entities/reviews/reviews-slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { menu: dishIds, reviews: reviewIds } = restaurant;

  const dishes = useSelector((state) => selectDishesByIds(state, dishIds));
  const reviews = useSelector((state) => selectReviewsByIds(state, reviewIds));

  if (!restaurant || !restaurant.name) {
    return null;
  }

  return (
    <Container>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu menu={dishes} />
      <RestaurantReviews reviews={reviews} />
    </Container>
  );
};
