import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users");

    const result = await response.json();

    if (!result.length) {
      rejectedWithValue("users/getUsers no data");
      return;
    }
    return result;
  }
);
