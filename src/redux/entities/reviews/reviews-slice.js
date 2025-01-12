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
    selectorReviewsIds: (state) => state.ids,
    selectorReviewById: (state, id) => state.entities[id],
  },
});

export const { selectorReviewById, selectorReviewsIds } =
  reviewsSlice.selectors;
