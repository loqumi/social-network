import React from "react";
import UserChats from "./UserChats"

const UserChatsContainer = (props) => {
  let state = props.store.getState();

  return <UserChats chats={state.messagespage.chats}/>
};

export default UserChatsContainer;
