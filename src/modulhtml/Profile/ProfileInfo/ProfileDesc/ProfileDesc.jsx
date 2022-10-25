import React from "react";
import style from "./ProfileDesc.module.css";

const ProfileDesc = (props) => {
  return (
    <div className={`${"about"} ${style.text}`}>
      <div className={style.username}>{props.username}</div>
      <ul className={style.ulstyle}>
        {info_about.map(({ title }) => (
          <li key={title} className={style.item}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const info_about = [
  { title: "Date of Birth" },
  { title: "City" },
  { title: "Education" },
  { title: "Website" },
];

export default ProfileDesc;
