import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
      return state;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }

      return state;
    },

    removeAllFromCart: (state, { payload }) => {
      delete state[payload];
      return state;
    },
  },
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []);
    },
    selectCartItemAmountById: (state, id) => state[id],
  },
});

export const { selectCartItems, selectCartItemAmountById } =
  cartSlice.selectors;

export const { addToCart, removeFromCart, removeAllFromCart } =
  cartSlice.actions;
