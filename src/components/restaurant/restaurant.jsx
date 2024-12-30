import { useAuth } from "../auth-context/use-auth";
import { Container } from "../container/container";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { RestaurantReviews } from "../restaurant-reviews/restaurant-reviews";

export const Restaurant = ({ restaurant }) => {
  const { name } = restaurant;
  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <Container>
      <h2>{name}</h2>
      <RestaurantMenu restaurant={restaurant} />
      {auth.isAuthorized && <RestaurantReviews restaurant={restaurant} />}
    </Container>
  );
};
