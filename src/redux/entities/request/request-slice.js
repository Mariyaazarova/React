import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../consts";

export const requestSlice = createSlice({
  name: "request",
  initialState: {},
  selectors: {
    selectRequestStatusById: (state, id) => state[id],
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUSES.PENDING}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUSES.FULFILLED}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.FULFILLED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith(`/${REQUEST_STATUSES.REJECTED}`),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUSES.REJECTED;
        }
      ),
});

export const { selectRequestStatusById } = requestSlice.selectors;
