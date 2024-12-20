import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { Headrestaurant } from "../headrestaurant/headrestaurant";
export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(
    "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2"
  );

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

      {activeRestaurant && <Headrestaurant headrestaurant={activeRestaurant} />}
    </div>
  );
};
