import React from "react";
import style from "./NewPost.module.css";

const NewPost = (props) => {
  let NewPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let post = NewPostElement.current.value;
    props.updateNewPostText(post);
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
