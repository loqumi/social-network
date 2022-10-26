import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <aside className={`${style.sidebar} container body`}>
      <nav className="main_nav">
        <ul>
          {sidebar.map(({ href, title }) => (
            <li key={title} className={style.item}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  isActive ? style.activeLink : undefined
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className={style.item}>Friends</li>
        </ul>
        <ul className={style.friends}>
          {friend.map(({ name, avatar, id }) => (
            <li key={id} className={style.friend}>
              <img className={style.avatar} src={avatar} alt="avatar" />
              <div>{name}</div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const friend = [
  {
    id: 1,
    name: "Vasya",
    avatar:
      "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
  },
  {
    id: 2,
    name: "Semen",
    avatar:
      "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
  },
  {
    id: 3,
    name: "Kolya",
    avatar:
      "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
  },
];

const sidebar = [
  { href: "profile", title: "Profile" },
  { href: "messages", title: "Messages" },
  { href: "news", title: "News" },
  { href: "music", title: "Music" },
  { href: "settings", title: "Settings" },
];
export default Sidebar;
