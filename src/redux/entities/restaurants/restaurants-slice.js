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
    selectEntities: (state) => state.entities,
    selectIds: (state) => state.ids,
  },
});

export const selectRestaurantById = createSelector(
  [restaurantsSlice.selectors.selectEntities, (_, id) => id],
  (entities, id) => entities[id]
);

export const selectRestaurants = createSelector(
  [restaurantsSlice.selectors.selectEntities],
  (entities) => Object.values(entities)
);

export const { selectEntities, selectIds } = restaurantsSlice.selectors;
