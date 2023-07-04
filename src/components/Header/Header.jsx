import { Link } from "react-router-dom";
import currentUser from "../../images/currentUser.jpg";
import Select from "react-select";

import css from "./Header.module.css";

import { useDispatch, useSelector } from "react-redux";
// import { selectUsers } from "../../redux/UsersSlice/selectorsUsers";
// import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";
import { updateFilter } from "../../redux/UsersSlice/UsersSlice";
import { useEffect } from "react";
import { selectUsers } from "../../redux/UsersSlice/selectorsUsers";
import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";

const Header = () => {
  const users = useSelector(selectUsers);

  const followers = useSelector(selectFollowingCurrentUser);
  const dispatch = useDispatch();
  const options = [
    { value: "all_follow", label: "All follow" },
    { value: "follow", label: "Follow " },
    { value: "followings", label: "Followings " },
  ];
  useEffect(() => {
    dispatch(updateFilter(users));
  });

  const nahdleChange = (value) => {
    let filter = [];
    if (value.value === "followings") {
      filter = users.filter((user) =>
        followers.find((userId) => Number(user.id) === Number(userId))
      );
    } else if (value.value === "follow") {
      users.forEach((user) => {
        const result = followers.includes(Number(user.id));

        if (!result) {
          filter.push(user);
        }
      });
    } else {
      filter = [...users];
    }
    dispatch(updateFilter(filter));
  };
  return (
    <div className={css.header}>
      <div className={`${css.container} ${css.header_position}`}>
        <div className="left">
          <Link to="./ " className={css.logo}>
            <span>Social tweets</span>
          </Link>
        </div>
        <Select
          options={options}
          className={css.select}
          defaultValue={options[0]}
          onChange={nahdleChange}
        />

        <div className={css.rigth}>
          <Link to="/profile/:id">
            <div className={css.currentUser_login}>
              <img
                src={currentUser}
                alt="currentUser"
                className={css.currentUser_foto}
              />
              <span className={css.name}>Djon</span>
            </div>
          </Link>
          <span className={css.logOut}>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
