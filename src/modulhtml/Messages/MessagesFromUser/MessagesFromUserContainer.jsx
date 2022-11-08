import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer";
import MessagesFromUser from "./MessagesFromUser"

const MessagesFromUserContainer = (props) => {
  let state = props.store.getState();

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <MessagesFromUser
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      messages={state.messagespage.messages}
      newMessageBody={state.messagespage.newMessageBody}
    />
  );
};

export default MessagesFromUserContainer;
