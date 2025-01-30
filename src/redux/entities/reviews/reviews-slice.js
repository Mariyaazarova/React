import {
  createSelector,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectReviewsEntities: (state) => state.entities,
  },
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
      state.requestStatus = "fulfilled";
    });
  },
});

export const selectReviewsByIds = createSelector(
  [reviewsSlice.selectors.selectReviewsEntities, (_, ids) => ids],
  (entities, ids) => {
    return Array.isArray(ids) ? ids.map((item) => entities[item]) : [];
  }
);

export const { selectReviewsEntities } = reviewsSlice.selectors;
