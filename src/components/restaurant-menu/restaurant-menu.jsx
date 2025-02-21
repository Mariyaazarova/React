import { RestaurantMenuConteiner } from "./restaurant-menu-container";

export const RestaurantMenu = async ({ params }) => {
  const { restaurantId } = await params;

  return <RestaurantMenuConteiner restaurantId={restaurantId} />;
};
