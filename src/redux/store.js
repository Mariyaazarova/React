import { configureStore } from "@reduxjs/toolkit";
import { headrestaurantsSlice } from "../redux/entities/headrestaurants/headrestaurants-slice";
import { dishesSlice } from "../redux/entities/dishes/dishes-slice";
import { reviewsSlice } from "../redux/entities/reviews/reviews-slice";

export const store = configureStore({
  reducer: {
    [headrestaurantsSlice.name]: headrestaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
  },
});
