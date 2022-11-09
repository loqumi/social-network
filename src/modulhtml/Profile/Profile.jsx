import React from "react";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import PostContainer from "./Post/PostContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = () => {
  return (
    <div className={style.body}>
      <Wallpaper />
      <ProfileInfoContainer />
      <PostContainer />
    </div>
  );
};

export default Profile;
