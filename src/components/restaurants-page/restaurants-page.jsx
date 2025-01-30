import styles from "./restaurants-page.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectRestaurants } from "../../redux/entities/restaurants/restaurants-slice";
import { NavLink, Outlet } from "react-router-dom";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantsPage = () => {
  const restaurants = useSelector(selectRestaurants);

  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === "pending") {
    return "loading...";
  }
  if (requestStatus === "rejected") {
    return "error...";
  }
  if (!restaurants.length) {
    return null;
  }

  return (
    <div>
      <div className={styles.tabsImage}></div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>
            {restaurants.map((restaurant) => (
              <NavLink
                to={`/restaurants/${restaurant.id}`}
                className={({ isActive }) =>
                  classNames(styles.buttonTabs, isActive && styles.active)
                }
                key={restaurant.id}
              >
                {restaurant.name}
              </NavLink>
            ))}
          </div>
        </Container>
      </div>
      <Outlet />
    </div>
  );
};
