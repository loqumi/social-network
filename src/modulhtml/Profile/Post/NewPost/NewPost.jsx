import React from "react";
import style from "./NewPost.module.css"
const NewPost = () => {
  return (
    <form>
      <h2 className={style.text}>My Posts</h2>
      <textarea
        placeholder="Write new intresting post!!"
        className={style.textarea}
      />
      <div className={style.buttons}>
        <input type="reset" className={style.button} value="New post!"/>
      </div>
    </form>
  );
};
export default NewPost;
