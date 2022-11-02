import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = (props) => {
  return (
    <div className={style.body}>
      <Wallpaper />
      <ProfileInfo state={props.state.data}/>
      <Post state={props.state.data} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
