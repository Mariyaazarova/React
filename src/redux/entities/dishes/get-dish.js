import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./dishes-slice";
import { API_BASE_URL } from "../../consts-api";

export const getDish = createAsyncThunk(
  "dishes/fetchDish",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/dishes?dishId=${dishId}`);

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
