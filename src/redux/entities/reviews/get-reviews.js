import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from "./reviews-slice";
import { API_BASE_URL } from "../../consts-api";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectedWithValue }) => {
    const response = await fetch(
      `${API_BASE_URL}/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      rejectedWithValue("reviews/getReviews no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectReviewsIds(getState()).length === 0;
    },
  }
);
