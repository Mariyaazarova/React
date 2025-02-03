import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from "./dishes-slice";
import { API_BASE_URL } from "../../consts-api";

export const getDishes = createAsyncThunk(
  "dishes/fetchDishes",
  async (restaurantId, { rejectedWithValue }) => {
    const response = await fetch(
      `${API_BASE_URL}/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result) {
      rejectedWithValue("dishes/fetchDishes no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectDishesIds(getState()).length === 0;
    },
  }
);
