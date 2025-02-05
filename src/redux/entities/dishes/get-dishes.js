import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../consts";
import { selectRestaurantById } from "../restaurants/restaurants-slice";
import { selectDishesByIds } from "./dishes-slice";

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
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      // если нужные блюда есть в сторе, то не запрашивать
      // нужные - значит, блюда данного ресторана
      // нужно получить ресторан из стора (если его нет, отправляем запрос)
      const restaurant = selectRestaurantById(state, restaurantId);
      const restaurantDishesIds = restaurant.menu;
      if (!restaurant || !Array.isArray(restaurantDishesIds)) return true;

      // нужно получить блюда этого ресторана из стора
      const dishes = selectDishesByIds(state, restaurantDishesIds);
      const dishesIds = dishes.map((item) => item.id);

      // если все блюда ресторана присутствуют в dishes, не отправляем запрос
      if (restaurantDishesIds.every((item) => dishesIds.includes(item))) {
        return false;
      }
      // иначе, отправляем запрос
      else {
        return true;
      }
    },
  }
);
