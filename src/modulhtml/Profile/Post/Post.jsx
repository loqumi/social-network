import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPost from "./MyPost/MyPost";

const Post = (props) => {
  return (
    <div>
      <NewPost
        addPost={props.addPost}
        newPostText={props.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
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
