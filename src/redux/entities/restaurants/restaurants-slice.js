import { createSlice } from "@reduxjs/toolkit";
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
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurants: (state) => Object.values(state.entities),
  },
});

export const { selectRestaurantsIds, selectRestaurantById, selectRestaurants } =
  restaurantsSlice.selectors;
