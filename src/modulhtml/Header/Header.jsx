import React from "react";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className="container body">
      <div className={style.header}>
        <img
          src="https://img.icons8.com/external-others-pike-picture/344/external-Logo-free-shipping-others-pike-picture.png"
          alt="kokoko"
          className={style.image}
        />
      </div>
      <nav></nav>
    </header>
  );
};
export default Header;
