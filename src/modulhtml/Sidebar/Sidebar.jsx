import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
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
        </ul>
      </nav>
    </aside>
  );
};

const sidebar = [
  { href: "profile", title: "Profile" },
  { href: "messages", title: "Messages" },
  { href: "news", title: "News" },
  { href: "music", title: "Music" },
  { href: "settings", title: "Settings" },
];
export default Sidebar;
