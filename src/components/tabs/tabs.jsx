import { useState } from "react";
import styles from "./tabs.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import classNames from "classnames";
import {
  selectRestaurantById,
  selectRestaurants,
} from "../../redux/entities/restaurants/restaurants-slice";
import { Restaurant } from "../restaurant/restaurant";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";

export const Tabs = () => {
  const { auth } = useAuth();

  const restaurants = useSelector(selectRestaurants);
  const [activeTab, setActiveTab] = useState();

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeTab)
  );

  return (
    <div>
      <div className={styles.tabsImage}></div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>
            {restaurants.map((restaurant) => (
              <NavLink
                to={`/restaurants/${restaurant.id}`}
                className={classNames(styles.buttonTabs, {
                  [styles.active]: restaurant.id === activeTab,
                })}
                key={restaurant.id}
                onClick={() => handleClick(restaurant.id)}
              >
                {restaurant.name}
              </NavLink>
            ))}
          </div>
        </Container>
      </div>
      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} id={activeRestaurant.id} />
      )}
      <Container>{auth.isAuthorized && <Cart />}</Container>
    </div>
  );
};
