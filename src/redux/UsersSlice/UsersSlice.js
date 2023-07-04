import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./operationsUsers";

const initialState = {
  users: [],
  filterFollowing: [],
  page: 1,
  isLoading: false,
  isError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
    resetPage(state) {
      state.page = 1;
    },
    updateFilter(state, { payload }) {
      state.filterFollowing = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = [...state.users, ...payload];
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { addPage, resetPage, updateFilter } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
