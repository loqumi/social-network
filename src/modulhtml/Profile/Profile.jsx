import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wallpaper from "./wallpaper/wallpaper";
import style from "./Profile.module.css";
import Post from "./Post/Post";

const Profile = (props) => {
  return (
    <div className={style.body}>
      <Wallpaper />
      <ProfileInfo
        infoabout={props.data.infoabout}
        username={props.data.username}
        avatar={props.data.profileAvatar}
      />
      <Post
        post={props.data.post}
        newPostText={props.data.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
