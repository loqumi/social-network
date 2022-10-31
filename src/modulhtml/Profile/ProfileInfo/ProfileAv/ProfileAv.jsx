import React from "react";
import style from "./ProfileAv.module.css";

const ProfileAv = (props) => {
  return <img className={style.image} src={props.src} alt={props.alt} />;
};
export default ProfileAv;
