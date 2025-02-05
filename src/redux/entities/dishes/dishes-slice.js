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
        entityAdapter.addMany(state, payload);
      })
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.addOne(state, payload);
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
    if (!Array.isArray(ids)) return [];
    return ids.filter((item) => item in entities).map((item) => entities[item]);
  }
);

export const { selectDishesEntities, selectDishesIds } = dishesSlice.selectors;
