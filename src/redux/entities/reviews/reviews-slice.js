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
    selectReviewsIds: (state) => state.ids,
    selectReviewsEntities: (state) => state.entities,
  },
  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    });
  },
});

export const selectReviewsByIds = createSelector(
  [reviewsSlice.selectors.selectReviewsEntities, (_, ids) => ids],
  (entities, ids) => {
    if (!Array.isArray(ids)) return [];
    return ids.filter((item) => item in entities).map((item) => entities[item]);
  }
);

export const { selectReviewsEntities, selectReviewsIds } =
  reviewsSlice.selectors;
