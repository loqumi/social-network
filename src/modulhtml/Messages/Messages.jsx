import React from "react";
import style from "./Messages.module.css";
import UserChatsContainer from "./UserChats/UserChatsContainer";
import MessagesFromUserContainer from "./MessagesFromUser/MessagesFromUserContainer";

const Messages = () => {
  return (
    <div className={style.body}>
      <UserChatsContainer />
      <MessagesFromUserContainer />
    </div>
  );
};

export default Messages;
