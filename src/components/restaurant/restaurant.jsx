import { RestaurantContainer } from "./restaurant-container";

export const Restaurant = async ({ params }) => {
  const { restaurantId } = await params;

  return <RestaurantContainer restaurantId={restaurantId} />;
};
