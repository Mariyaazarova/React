import { Container } from "../container/container";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "../restaurant-reviews/restaurant-reviews";

export const Restaurant = ({ restaurant }) => {
  const { name } = restaurant;
  return (
    <Container>
      <h2>{name}</h2>
      <RestaurantMenu restaurant={restaurant} />
      <RestaurantReviews restaurant={restaurant} />
    </Container>
  );
};
