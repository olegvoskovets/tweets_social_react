import { NavLink } from "react-router-dom";
import Home from "../../images/home.png";
import Users from "../../images/users.png";
import currentUser from "../../images/currentUser.jpg";
import Friends from "../../images/friends2.png";
import Other from "../../images/other.png";
import css from "./LeftBar.module.css";

const LeftBar = () => {
  return (
    <div className={css.leftBar}>
      <div className={css.container2}>
        <ul className={css.menu}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
              to="/"
            >
              <img src={Home} width="40px" alt="home" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tweets"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img src={Users} width="40px" alt="users" />
              <span>Users</span>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className={css.menu}>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img className={css.currentUser} src={currentUser} alt="" />
              <span>Profile</span>
            </NavLink>
          </li>

          <li className={css.item}>
            <NavLink
              to="/friends"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img className={css.Friends} src={Friends} alt="Friends" />
              <span>Friends</span>
            </NavLink>
          </li>
        </ul>
        <hr />
        <ul className={css.menu}>
          <li className={css.item}>
            <NavLink
              to="/others"
              className={({ isActive }) =>
                isActive ? `${css.item} ${css.active}` : `${css.item}`
              }
            >
              <img className={css.Friends} src={Other} alt="Other" />
              <span>Others</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
