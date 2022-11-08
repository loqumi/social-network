import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = (props) => {
  let state = props.store.getState().sidebar;
  return (
    <aside className={`${style.sidebar} container body`}>
      <nav className="main_nav">
        <ul>
          {state.sidebarnav.map(({ href, title }) => (
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
          {state.friends.map(({ name, avatar, id }) => (
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

export default Sidebar;
