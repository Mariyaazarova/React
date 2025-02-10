import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "../redux/entities/dishes/dishes-slice";
import { reviewsSlice } from "../redux/entities/reviews/reviews-slice";
import { usersSlice } from "../redux/entities/users/users-slice";
import { cartSlice } from "./entities/cart/cart-slice";
import { requestSlice } from "./entities/request/request-slice";
import { apiSlice } from "./services/api/api";
import { createLogger } from "redux-logger";

export const store = configureStore({
  reducer: {
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(createLogger()),
});
