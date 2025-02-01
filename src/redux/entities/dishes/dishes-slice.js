import {
  createSelector,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishesEntities: (state) => state.entities,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      });
  },
});

export const selectDishById = createSelector(
  [dishesSlice.selectors.selectDishesEntities, (__, id) => id],
  (entities, id) => entities[id]
);

export const selectDishesByIds = createSelector(
  [dishesSlice.selectors.selectDishesEntities, (__, ids) => ids],
  (entities, ids) => {
    return Array.isArray(ids) ? ids.map((item) => entities[item]) : [];
  }
);

export const { selectDishesEntities } = dishesSlice.selectors;
