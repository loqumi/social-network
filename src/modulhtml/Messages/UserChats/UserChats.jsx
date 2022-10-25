import React from "react";
import { NavLink } from "react-router-dom";
import style from "./UserChats.module.css";

const UserChats = () => {
  return (
    <ul className={style.ul}>
      {chats.map(({ link, name }) => (
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

const chats = [
  { link: "/messages/1", name: "Vasiliy Piraniev" },
  { link: "/messages/2", name: "My self" },
  { link: "/messages/3", name: "kto to eshe" },
  { link: "/messages/4", name: "Lorem, ipsum." },
  { link: "/messages/5", name: "Lorem kto to tam" },
  { link: "/messages/6", name: "Kto takoy lorem" },
  { link: "/messages/7", name: "Ne ya a kto to eshe" },
];
export default UserChats;
