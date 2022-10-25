import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = () => {
  return (
    <div className={style.body}>
      <Wallpaper
        src={
          "https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png"
        }
        alt={"wallpaper"}
      />
      <ProfileInfo />
      <Post />
    </div>
  );
};

export default Profile;
