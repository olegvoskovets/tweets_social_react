import { useState } from "react";
import Logo from "../../images/logo.png";

import UserFoto from "../UserFoto/UserFoto";
import css from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFollowingCurrentUser } from "../../redux/currentUser/selectorsCurrentUser";
import {
  addFollowing,
  resetFollowing,
} from "../../redux/currentUser/currentUserSlice";

const Card = ({ user }) => {
  const dispatch = useDispatch();
  // const user = props;
  const currentUser = user;

  const follows = useSelector(selectFollowingCurrentUser);
  const [following, setFollowing] = useState(
    follows.includes(Number(currentUser.id))
  );
  const [followers, setFollowers] = useState(
    following ? currentUser.followers + 1 : currentUser.followers
  );

  const schangeFollowers = () => {
    setFollowers((prev) => (following ? prev - 1 : prev + 1));
  };

  const handleClickFollowing = () => {
    setFollowing(!following);
    schangeFollowers();

    dispatch(
      following ? resetFollowing(currentUser.id) : addFollowing(currentUser.id)
    );
  };

  return (
    <>
      <li className={css.cardUser}>
        <div className={css.top}>
          <img
            className={css.logo}
            src={Logo}
            width={"76px"}
            height={"22px"}
            alt="logo"
          />
          <div className={css.background_card}></div>
        </div>
        <div className={css.rectangle}>
          <UserFoto userUrl={currentUser.avatar} />
        </div>
        <div className={css.button_block}>
          <div className={css.button_block_position}>
            <div className={css.tweets_count}>{currentUser.tweets} Tweets</div>
            <div className={css.followers_count}>{followers} Followers</div>

            <button
              className={
                following
                  ? `${css.btn_follow} ${css.btn_following}`
                  : `${css.btn_follow}`
              }
              onClick={handleClickFollowing}
            >
              <span className={css.btn_text}>
                {following ? "Following" : "Follow"}
              </span>
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
