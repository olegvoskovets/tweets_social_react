import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectFollowingCurrentUser } from "../currentUser/selectorsCurrentUser";

export const selectUsers = (state) => state.users.users;
export const selectIsLoadingUsers = (state) => state.users.isLoading;
export const selectPage = (state) => state.users.page;
export const selectFilterFollowing = (state) => state.users.filterFollowing;

export const selectFilterSearch = createSelector(
  [selectUsers, selectFilterFollowing],
  (users, filter) => {
    const data = useSelector(selectUsers);
    let visibleCard = [];
    const followers = useSelector(selectFollowingCurrentUser);
    console.log("followers", followers);
    console.log("users==", users);
    console.log("data==", data);
    // let filter = [];
    if (filter === "followings") {
      console.log("followings");
      visibleCard = users.filter((user) =>
        followers.find((userId) => Number(user.id) === Number(userId))
      );
    } else if (filter === "follow") {
      console.log("follow");

      users.forEach((user) => {
        const result = followers.includes(Number(user.id));
        console.log("result= ", result);
        if (!result) {
          visibleCard.push(user);
        }
      });
    } else {
      visibleCard = [...users];
    }
    return visibleCard;
  }
);
