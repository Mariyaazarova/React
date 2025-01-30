import {
  createSelector,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectDishesEntities: (state) => state.entities,
  },

  extraReducers: (builder) => {
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
      state.requestStatus = "fulfilled";
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
