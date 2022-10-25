import React from "react";
import style from "./Messages.module.css"
import UserChats from "./UserChats/UserChats";
import MessagesFromUser from "./MessagesFromUser/MessagesFromUser";

const Messages = () => {
  return (
    <div className={style.body}>
      <UserChats/>
      <MessagesFromUser/>
    </div>
  );
};

export default Messages