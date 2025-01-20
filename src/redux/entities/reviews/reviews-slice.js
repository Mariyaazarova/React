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
    selectReviewsByIds: (state, ids) => {
      return Array.isArray(ids) ? ids.map((item) => state.entities[item]) : [];
    },
  },
});

export const { selectReviewsByIds } = reviewsSlice.selectors;
