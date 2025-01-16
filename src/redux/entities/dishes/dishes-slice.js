import { createSlice } from "@reduxjs/toolkit";
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
    selectDishesIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectDishesByIds: (state, ids) => {
      if (Array.isArray(ids)) {
        return ids.map((item) => state.entities[item]);
      }
      return [];
    },
  },
});

export const { selectDishesById, selectDishesIds, selectDishesByIds } =
  dishesSlice.selectors;
