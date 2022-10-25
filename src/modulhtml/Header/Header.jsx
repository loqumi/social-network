import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className="container">
      <div className={style.header}>
        <img
          src="https://img.icons8.com/external-others-pike-picture/344/external-Logo-free-shipping-others-pike-picture.png"
          alt="wallpaper"
          className={style.image}
        />
      </div>
    </header>
  );
};
export default Header;
