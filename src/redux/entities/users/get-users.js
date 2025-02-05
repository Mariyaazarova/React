import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./users-slice";
import { API_BASE_URL } from "../../consts";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${API_BASE_URL}/users`);

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("users/getUsers no data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const usersIds = selectUsersIds(getState());
      return usersIds.length === 0;
    },
  }
);
