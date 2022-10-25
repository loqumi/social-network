import React from "react";
import style from "./MyPost.module.css";
const OldPost = (props) => {
  return (
    <div className={`${style.item} ${style.post}`}>
      <img className={style.avatar} src={props.src} alt="avatar"></img>
      <div className={style.text}>
        {props.message}
        <span className={style.likes}>
          <img
            className={style.like_img}
            src="https://www.svgrepo.com/show/13653/like.svg"
            alt="like"
          />
          {props.likesCount} likes
        </span>
      </div>
    </div>
  );
};
// https://www.svgrepo.com/show/13689/like.svg
export default OldPost;
