import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <aside className={`${style.sidebar} container body`}>
      <nav className="main_nav">
        <ul>
          {props.sidebarnav.map(({ href, title }) => (
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
          <li className={style.item}>Friends
            <ul className={style.friends}>
            {props.friends.map(({ name, avatar, id }) => (
              <li key={id} className={style.friend}>
                <img className={style.avatar} src={avatar} alt="avatar" />
                <div>{name}</div>
              </li>
            ))}
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
