import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../consts";

export const getDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `${API_BASE_URL}/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result) {
      rejectWithValue("dishes/fetchDishes no data");
      return;
    }
    return result;
  }
);
