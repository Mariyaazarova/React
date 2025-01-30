import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, { rejectedWithValue }) => {
    const response = await fetch(
      "http://localhost:3001/api/reviews?restaurantId=:restaurantId "
    );

    const result = await response.json();

    if (!result.length) {
      rejectedWithValue("reviews/getReviews no data");
      return;
    }
    return result;
  }
);
