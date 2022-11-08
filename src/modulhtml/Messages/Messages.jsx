import React from "react";
import style from "./Messages.module.css";
import UserChatsContainer from "./UserChats/UserChatsContainer";
import MessagesFromUserContainer from "./MessagesFromUser/MessagesFromUserContainer";

const Messages = (props) => {
  return (
    <div className={style.body}>
      <UserChatsContainer store={props.store} />
      <MessagesFromUserContainer store={props.store} />
    </div>
  );
};

export default Messages;
