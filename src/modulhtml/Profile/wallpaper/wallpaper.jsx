import React from "react";
import style from "./wallpaper.module.css";

const wallpaper = (props) => {
  return <img className={style.image} src={props.src} alt={props.alt} />;
};
export default wallpaper;
