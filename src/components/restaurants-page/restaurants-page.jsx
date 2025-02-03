import styles from "./restaurants-page.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectRestaurants } from "../../redux/entities/restaurants/restaurants-slice";
import { NavLink, Outlet } from "react-router-dom";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";
import { IS_PENDING } from "../consts";

export const RestaurantsPage = () => {
  const restaurants = useSelector(selectRestaurants);

  const requestStatus = useRequest(getRestaurants);

  const renderRestaurants = () => {
    if (restaurants.length) {
      return (
        <>
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
        </>
      );
    } else if (requestStatus === IS_PENDING) {
      return <div>Loading...</div>;
    } else {
      return <div>error...</div>;
    }
  };

  return (
    <div>
      <div className={styles.tabsImage}></div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>{renderRestaurants()}</div>
        </Container>
      </div>
      <Outlet />
    </div>
  );
};
