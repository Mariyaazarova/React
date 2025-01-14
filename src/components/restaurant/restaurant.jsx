import { useAuth } from "../auth-context/use-auth";
import { Container } from "../container/container";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "../restaurant-reviews/restaurant-reviews";
import { useSelector } from "react-redux";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { selectorReviewById } from "../../redux/entities/reviews/reviews-slice";
import { selectorHeadrestaurantsById } from "../../redux/entities/headrestaurants/headrestaurants-slice";

export const Restaurant = ({ id }) => {
  const headrestaurant = useSelector((state) =>
    selectorHeadrestaurantsById(state, id),
  );

  const { auth } = useAuth();
  const { menu: dishIds, reviews: reviewIds } = headrestaurant;

  const dishes = useSelector((state) => selectDishesByIds(state, dishIds));

  const reviews = useSelector((state) =>
    reviewIds.map((reviewId) => selectorReviewById(state, reviewId)),
  );

  if (!headrestaurant || !headrestaurant.name) {
    return null;
  }

  return (
    <Container>
      <h2>{headrestaurant.name}</h2>
      <RestaurantMenu menu={dishes} />
      {auth.isAuthorized && <RestaurantReviews reviews={reviews} />}
    </Container>
  );
};
