import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "../redux/entities/restaurants/restaurants-slice";
import { dishesSlice } from "../redux/entities/dishes/dishes-slice";
import { reviewsSlice } from "../redux/entities/reviews/reviews-slice";
import { usersSlice } from "../redux/entities/users/users-slice";
import { cartSlice } from "../redux/entities/ui/cart/cart-slice";
import { requestSlice } from "./entities/ui/cart/request-slice";

const loggerMiddleware = () => (next) => (action) => {
  return next(action);
};

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(loggerMiddleware),
});
