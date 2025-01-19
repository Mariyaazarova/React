import { Container } from "../container/container";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant || !restaurant.name) {
    return null;
  }

  return (
    <Container>
      <h2>{restaurant.name}</h2>
      <div>
        <div>
          <NavLink to={`/restaurants/${restaurantId}/menu`}>Menu</NavLink>
        </div>
        <div>
          <NavLink to={`/restaurants/${restaurantId}/reviews`}>Reviews</NavLink>
        </div>
      </div>
      <Outlet />
    </Container>
  );
};
