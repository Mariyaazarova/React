import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (restaurantId, { rejectedWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectedWithValue("dishes/fetchDishes");
      return;
    }
    return result;
  }
);
