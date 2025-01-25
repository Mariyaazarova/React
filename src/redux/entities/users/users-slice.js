import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../materials/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
  ids: normalizedUsers.map((user) => user.id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;
