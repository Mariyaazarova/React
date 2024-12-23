import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Restaurant } from "../restaurant/restaurant";
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
      <div>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>

      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
