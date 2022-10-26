import React from "react";
import style from "./ProfileDesc.module.css";

const ProfileDesc = (props) => {
  return (
    <div className={`${"about"} ${style.text}`}>
      <div className={`${style.textstyle} ${style.username}`}>
        {props.username}
      </div>
      <ul className={style.ulstyle}>
        {info_about.map(({ title, value }) => (
          <li key={title} className={`${style.textstyle} ${style.item}`}>
            <div>{title}</div>
            <div>{value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const info_about = [
  { title: "Date of Birth:", value: "17.04.2001" },
  { title: "City:", value: "Fergana" },
  { title: "Education:", value: "Vocational secondary" },
  { title: "Website:", value: "http://github.com/loqumi" },
];

export default ProfileDesc;
