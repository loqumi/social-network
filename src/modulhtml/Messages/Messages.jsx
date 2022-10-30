import React from "react";
import style from "./Messages.module.css";
import UserChats from "./UserChats/UserChats";
import MessagesFromUser from "./MessagesFromUser/MessagesFromUser";

const Messages = (props) => {
  return (
    <div className={style.body}>
      <UserChats state={props.state.data}/>
      <MessagesFromUser state={props.state.data}/>
    </div>
  );
};

export default Messages;
