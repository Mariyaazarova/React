import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../materials/normalized-mock";

export const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const headrestaurantsSlice = createSlice({
  name: "headrestaurants",
  initialState,
  selectors: {
    selectorHeadrestaurantsIds: (state) => state.ids,
    selectorHeadrestaurantsById: (state, id) => state.entities[id],
  },
});

export const { selectorHeadrestaurantsIds, selectorHeadrestaurantsById } =
  headrestaurantsSlice.selectors;
