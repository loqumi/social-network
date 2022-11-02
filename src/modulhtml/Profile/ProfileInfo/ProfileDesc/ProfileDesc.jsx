import React from "react";
import style from "./ProfileDesc.module.css";

const ProfileDesc = (props) => {
  return (
    <div className={`${"about"} ${style.text}`}>
      <div className={`${style.textstyle} ${style.username}`}>
        {props.username}
      </div>
      <ul className={style.ulstyle}>
        {props.infoabout.map(({ title, value }) => (
          <li key={title} className={`${style.textstyle} ${style.item}`}>
            <div>{title}</div>
            <div>{value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDesc;
