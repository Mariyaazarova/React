import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice";

export const getDish = createAsyncThunk(
  "dishes/fetchDish",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?dishId=${dishId}`
    );

    const result = await response.json();
    if (!result) {
      rejectWithValue("dishes/fetchDish no data");
      return;
    }

    return result;
  },
  {
    condition: (dishId, { getState }) => {
      const dish = selectDishById(getState(), dishId);
      return !dish; // это краткая форма для: return dish ? false : true (если блюдо уже есть в store, то не отправляем запрос)
    },
  }
);
