import React from "react";
import style from "./Messages.module.css";
import UserChats from "./UserChats/UserChats";
import MessagesFromUser from "./MessagesFromUser/MessagesFromUser";

const Messages = (props) => {
  return (
    <div className={style.body}>
      <UserChats chats={props.data.chats}/>
      <MessagesFromUser messages={props.data.messages}/>
    </div>
  );
};

export default Messages;
