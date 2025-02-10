import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entities/cart/cart-slice";
import { apiSlice } from "./services/api/api";
import { createLogger } from "redux-logger";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(createLogger()),
});
