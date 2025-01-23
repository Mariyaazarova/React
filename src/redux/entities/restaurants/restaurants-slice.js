import { createSelector, createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";

export const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantsEntities: (state) => state.entities,
  },
});

export const selectRestaurantById = createSelector(
  [restaurantsSlice.selectors.selectRestaurantsEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectRestaurants = createSelector(
  [restaurantsSlice.selectors.selectRestaurantsEntities],
  (entities) => Object.values(entities)
);

export const { selectRestaurantsEntities } = restaurantsSlice.selectors;
