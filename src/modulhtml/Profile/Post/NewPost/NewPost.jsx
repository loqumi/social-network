import React from "react";
import style from "./NewPost.module.css";
import { addPostActionCreator, updateNewPostTextActionCreater } from "../../../../redux/state";

const NewPost = (props) => {
  let NewPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let post = NewPostElement.current.value;
    let action = updateNewPostTextActionCreater(post);
    props.dispatch(action);
  };

  return (
    <form>
      <h2 className={style.text}>My Posts</h2>
      <textarea
        onChange={onPostChange}
        placeholder="Write new intresting post!!"
        className={style.textarea}
        ref={NewPostElement}
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
