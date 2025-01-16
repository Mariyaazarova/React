import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./tabs.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import classNames from "classnames";
import {
  selectRestaurantsIds,
  selectRestaurantById,
} from "../../redux/entities/restaurants/restaurants-slice";

export const Tabs = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [activeTab, setActiveTab] = useState(restaurantsIds[0]);

  const restaurants = useSelector((state) =>
    restaurantsIds.map((id) => selectRestaurantById(state, id))
  );

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeTab)
  );

  return (
    <div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>
            {restaurants.map((restaurant) => (
              <button
                className={classNames(styles.buttonTabs, {
                  [styles.active]: restaurant.id === activeTab,
                })}
                key={restaurant.id}
                onClick={() => handleClick(restaurant.id)}
              >
                {restaurant.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} id={activeRestaurant.id} />
      )}
    </div>
  );
};
