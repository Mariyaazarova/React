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
    selectorDishesIds: (state) => state.ids,
    selectorDishById: (state, id) => state.entities[id],
  },
});

export const { selectorDishById, selectorDishesIds } = dishesSlice.selectors;
