import { Container } from "../container/container";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice";
import { RestaurantMenu } from "../restaurant-menu/restaurant-menu";
import { selectDishesByIds } from "../../redux/entities/dishes/dishes-slice";
import { selectReviewsByIds } from "../../redux/entities/reviews/reviews-slice";
import { useState } from "react";
import { RestaurantReviews } from "../restaurant-reviews/restaurant-reviews";
import classNames from "classnames";
import styles from "./restaurant.module.css";
import { NavLink } from "react-router-dom";

export const Restaurant = ({ id }) => {
  const [activeTab, setActiveTab] = useState("menu");
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { menu: dishIds, reviews: reviewIds } = restaurant;

  const dishes = useSelector((state) => selectDishesByIds(state, dishIds));
  const reviews = useSelector((state) => selectReviewsByIds(state, reviewIds));

  if (!restaurant || !restaurant.name) {
    return null;
  }

  return (
    <Container>
      <h2>{restaurant.name}</h2>
      <div className={styles.restaurant}>
        <NavLink
          to={`/restaurants/${id}/menu`}
          className={classNames(
            styles.buttonRestaurant,
            activeTab === "menu" && styles.active
          )}
          onClick={() => setActiveTab("menu")}
        >
          Menu
        </NavLink>
        <NavLink
          to={`/restaurants/${id}/reviews`}
          className={classNames(
            styles.buttonRestaurant,
            activeTab === "reviews" && styles.active
          )}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </NavLink>
      </div>
      {activeTab === "menu" && <RestaurantMenu menu={dishes} />}
      {activeTab === "reviews" && <RestaurantReviews reviews={reviews} />}
    </Container>
  );
};
