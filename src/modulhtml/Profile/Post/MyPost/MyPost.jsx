import React from "react";
import style from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={style.item}>
      <span className={style.username}>{props.username}</span>
      <div className={style.post}>
        <img className={style.avatar} src={props.avatar} alt="avatar" />
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
    </div>
  );
};
// https://www.svgrepo.com/show/13689/like.svg
export default MyPost;
