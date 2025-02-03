import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishesIds: (state) => state.ids,
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
    return Array.isArray(ids) ? ids.map((id) => entities[id]) : [];
  }
);
export const { selectDishesEntities, selectDishesIds } = dishesSlice.selectors;
