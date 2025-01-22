import { createSelector, createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../materials/normalized-mock";

export const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  selectors: {
    selectEntities: (state) => state.entities,
    selectIds: (state) => state.ids,
  },
});

export const selectReviewsByIds = createSelector(
  [reviewsSlice.selectors.selectEntities, (_, ids) => ids],
  (entities, ids) => {
    return Array.isArray(ids) ? ids.map((item) => entities[item]) : [];
  }
);

export const { selectEntities, selectIds } = reviewsSlice.selectors;
