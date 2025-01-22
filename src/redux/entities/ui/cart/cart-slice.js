import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) return;

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
    deleteCartEntry: (state, { payload }) => {
      delete state[payload];
    },
  },
});

export const selectCartItems = createSelector(
  (state) => state.cart,
  (cart) => {
    return Object.keys(cart).reduce((acc, id) => {
      acc.push({ id, amount: cart[id] });

      return acc;
    }, []);
  }
);

export const selectCartItemAmountById = (state, id) => state.cart[id];
export const { addToCart, removeFromCart, deleteCartEntry } = cartSlice.actions;
