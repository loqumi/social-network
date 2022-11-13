import React from "react";
import { NavLink } from "react-router-dom";
import style from "./UserChats.module.css";

const UserChats = (props) => {
  return (
    <ul className={style.ul}>
      {props.chats.map(({ link, name }) => (
        <NavLink
          key={link}
          to={link}
          className={({ isActive }) =>
            isActive ? style.activeLink : undefined
          }
        >
          {name}
        </NavLink>
      ))}
    </ul>
  );
};

export default UserChats;
