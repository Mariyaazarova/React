import { createSelector, createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../materials/normalized-mock";

export const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectEntities: (state) => state.entities,
    selectIds: (state) => state.ids,
  },
});

export const selectDishById = createSelector(
  [dishesSlice.selectors.selectEntities, (__, id) => id],
  (entities, id) => entities[id]
);

export const selectDishesByIds = createSelector(
  [dishesSlice.selectors.selectEntities, (__, ids) => ids],
  (entities, ids) => {
    return Array.isArray(ids) ? ids.map((item) => entities[item]) : [];
  }
);

export const { selectEntities, selectIds } = dishesSlice.selectors;
