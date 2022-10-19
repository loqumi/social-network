import React from "react";
import Profile from "./Profile/Profile";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Body.module.css";
import Post from "./Post/Post";

const Body = () => {
  return (
    <div className={`${style.blog}`}>
      <Wallpaper
        src={
          "https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png"
        }
        alt={"wallpaper"}
      />
      <Profile />
      <Post />
    </div>
  );
};

export default Body;
