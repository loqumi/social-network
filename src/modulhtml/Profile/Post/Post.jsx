import React from "react";
import MyPost from "./MyPost/MyPost";
import NewPostContainer from "./NewPost/NewPostContainer";

const Post = (props) => {
  return (
    <div>
      <NewPostContainer />
      {props.post.map(({ username, avatar, message, likesCount }) => (
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
