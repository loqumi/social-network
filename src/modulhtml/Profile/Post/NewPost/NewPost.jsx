import React from "react";
import style from "./NewPost.module.css"
const NewPost = (props) => {
  return (
    <div>
      <h2>My Posts</h2>
      <textarea
        placeholder="Write new intresting post!!"
        className={style.textarea}
      ></textarea>
      <div className={style.buttons}>
        <button className={style.button}>Send</button>
      </div>
    </div>
  );
};
export default NewPost;
