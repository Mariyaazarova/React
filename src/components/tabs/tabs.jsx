import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./tabs.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import {
  selectorHeadrestaurantsIds,
  selectorHeadrestaurantsById,
} from "../../redux/entities/headrestaurants/headrestaurants-slice";

export const Tabs = () => {
  const headrestaurantsIds = useSelector(selectorHeadrestaurantsIds);
  const [activeTab, setActiveTab] = useState(headrestaurantsIds[0]);

  const restaurants = useSelector((state) =>
    headrestaurantsIds.map((id) => selectorHeadrestaurantsById(state, id)),
  );

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeRestaurant = useSelector((state) =>
    selectorHeadrestaurantsById(state, activeTab),
  );

  return (
    <div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>
            {restaurants.map((restaurant) => (
              <button
                className={`${styles.buttonTabs} ${restaurant.id === activeTab ? styles.active : ""}`}
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
