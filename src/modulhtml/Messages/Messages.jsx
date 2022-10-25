import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Messages.module.css"


const Messages = () => {
  return (
    <div className={style.body}>
      <ul className={style.ul}>
        <NavLink to="/messages/1">Vasiliy Piraniev</NavLink>
        <NavLink to="/messages/2">My self</NavLink>
        <NavLink to="/messages/3">Kto to eshe</NavLink>
        <NavLink to="/messages/4">Lorem, ipsum.</NavLink>
        <NavLink to="/messages/5">Lorem kto to tam</NavLink>
        <NavLink to="/messages/6">Kto takoy lorem</NavLink>
        <NavLink to="/messages/7">Ne ya a kto to eshe</NavLink>
      </ul>
      <ul className={style.ul}>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
      </ul>
    </div>
  );
};

export default Messages