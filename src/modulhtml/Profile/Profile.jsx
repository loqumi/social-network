import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = (props) => {
  return (
    <div className={style.body}>
      <Wallpaper />
      <ProfileInfo store={props.store} />
      <Post store={props.store} />
    </div>
  );
};

export default Profile;
