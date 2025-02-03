import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectRestaurantsEntities: (state) => state.entities,
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
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
