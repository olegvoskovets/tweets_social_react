import { createSlice } from "@reduxjs/toolkit";
import { getFollowingCurrentUser } from "./operationsCurrentUser";

const initialState = {
  following: [],

  isLoading: false,
  isError: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    addFollowing(state, { payload }) {
      state.following = [...state.following, Number(payload)];
    },
    resetFollowing(state, { payload }) {
      state.following = state.following.filter(
        (el) => Number(el) !== Number(payload)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFollowingCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getFollowingCurrentUser.fulfilled, (state, { payload }) => {
        state.following = [...payload];
        state.isLoading = false;
      })
      .addCase(getFollowingCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export const { addFollowing, resetFollowing } = currentUserSlice.actions;
export const currentUserReduser = currentUserSlice.reducer;
