import css from "./UserFoto.module.css";

const UserFoto = (userUrl) => {
  const url = userUrl.userUrl;

  return (
    <div className={css.cardUser}>
      {/* <img className={css.card_User} src={Ellipse} alt="Ellipse" /> */}
      <img className={css.cardUser_foto} src={url} alt="urlUser" />
    </div>
  );
};

export default UserFoto;
