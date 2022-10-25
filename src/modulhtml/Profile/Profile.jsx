import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = () => {
  return (
    <div className={style.body}>
      <Wallpaper/>
      <ProfileInfo />
      <Post />
    </div>
  );
};

export default Profile;
