import React from "react";
import style from "./NewPost.module.css";

const NewPost = (props) => {
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let post = e.target.value;
    props.updateNewPostText(post);
  };

  return (
    <form>
      <h2 className={style.text}>My Posts</h2>
      <textarea
        onChange={onPostChange}
        placeholder="Write new intresting post!!"
        className={style.textarea}
        value={props.newPostText}
      />
      <div className={style.buttons}>
        <input
          onClick={onAddPost}
          type="button"
          className={style.button}
          value="New post!"
        />
      </div>
    </form>
  );
};
export default NewPost;
