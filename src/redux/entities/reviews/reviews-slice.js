import { createSlice } from "@reduxjs/toolkit";
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
    selectReviewsIds: (state) => state.ids,
    selectReviewsById: (state, id) => state.entities[id],
    selectReviewsByIds: (state, ids) => {
      if (Array.isArray(ids)) {
        return ids.map((item) => state.entities[item]);
      }
      return [];
    },
  },
});

export const { selectReviewsById, selectReviewsIds, selectReviewsByIds } =
  reviewsSlice.selectors;
