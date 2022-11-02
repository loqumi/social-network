import React from "react";
import style from "./NewPost.module.css";

const NewPost = (props) => {

  let NewPostElement = React.createRef();

  let addPost = () => {
    let post = NewPostElement.current.value;
    props.addPost(post);
    NewPostElement.current.value = '';
  }

  return (
    <form>
      <h2 className={style.text}>My Posts</h2>
      <textarea
        placeholder="Write new intresting post!!"
        className={style.textarea}
        ref={NewPostElement}
      />
      <div className={style.buttons}>
        <input onClick={ addPost } type="button" className={style.button} value="New post!" />
      </div>
    </form>
  );
};
export default NewPost;
