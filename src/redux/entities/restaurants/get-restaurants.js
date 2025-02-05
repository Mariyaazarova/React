import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurants } from "./restaurants-slice";
import { API_BASE_URL } from "../../consts";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("restaurants/getRestaurants no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      const restaurants = selectRestaurants(getState());
      return restaurants.length === 0;
    },
  }
);
