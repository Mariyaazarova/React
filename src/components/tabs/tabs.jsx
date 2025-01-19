import { useState } from "react";
import styles from "./tabs.module.css";
import { Container } from "../container/container";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { selectRestaurants } from "../../redux/entities/restaurants/restaurants-slice";
import { NavLink } from "react-router-dom";

export const Tabs = () => {
  const restaurants = useSelector(selectRestaurants);
  const [activeTab, setActiveTab] = useState(restaurants[0]?.id || null);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className={styles.tabsImage}>добавить картинку</div>
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
    </div>
  );
};
