import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (post) => {
    props.store.dispatch(updateNewPostTextActionCreater(post));
  };

  return (
    <NewPost
      updateNewPostText={onPostChange}
      addPost={onAddPost}
      newPostText={state.profilepage.newPostText}
    />
  );
};
export default MyPostsContainer;
