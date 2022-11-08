import React from "react";
import MyPost from "./MyPost/MyPost";
import MyPostsContainer from "./NewPost/NewPostContainer";

const Post = (props) => {
  let state = props.store.getState();
  return (
    <div>
      <MyPostsContainer store={props.store} />
      {state.profilepage.post.map(({ username, avatar, message, likesCount }) => (
        <MyPost
          key={message}
          username={username}
          avatar={avatar}
          message={message}
          likesCount={likesCount}
        />
      ))}
    </div>
  );
};

export default Post;
