import { createSlice } from "@reduxjs/toolkit";
import { REQUESR_STATUSES } from "../../consts";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUESR_STATUSES.PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUESR_STATUSES.FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUESR_STATUSES.REJECTED;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
