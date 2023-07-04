import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/Api";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (page, thunk_Api) => {
    try {
      const { data } = await Api.get(`users?limit=3&page=${page}`);
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
