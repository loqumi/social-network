import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPost from "./MyPost/MyPost";

const Post = () => {
  return (
    <div>
      <NewPost />
      <MyPost
        username="Vasiliy Piraniev"
        avatar={"https://vraki.net/sites/default/files/inline/images/2_3.png"}
        message="Hi, how are you?"
        likesCount="15"
      />
      <MyPost
        username="Lorem, ipsum."
        avatar={
          "https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png"
        }
        message="It`s my first post!"
        likesCount="31"
      />
    </div>
  );
};
export default Post;
