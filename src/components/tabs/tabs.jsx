import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./tabs.module.css";
import { Container } from "../container/container";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeTab
  );

  return (
    <div>
      <div className={styles.tabsHeader}>
        <Container>
          <div className={styles.tabsContent}>
            {restaurants.map((restaurant) => (
              <button
                className={styles.buttonTabs}
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
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
