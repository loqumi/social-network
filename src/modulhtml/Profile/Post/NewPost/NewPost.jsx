import React from "react";
import style from "./NewPost.module.css";
import { addPostActionCreator, updateNewPostTextActionCreater } from "../../../../redux/profile-reducer";

const NewPost = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (e) => {
    let post = e.target.value;
    props.dispatch(updateNewPostTextActionCreater(post));
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
          onClick={addPost}
          type="button"
          className={style.button}
          value="New post!"
        />
      </div>
    </form>
  );
};
export default NewPost;
