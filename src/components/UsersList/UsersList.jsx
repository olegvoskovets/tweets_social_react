import Card from "../Card/Card";

import css from "./UsersList.module.css";

const UsersList = (users) => {
  const data = users.users;

  return (
    <>
      <ul className={css.user_list}>
        {data?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
