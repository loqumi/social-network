import React from "react";
import style from "./MessagesFromUser.module.css";

const MessagesFromUser = (props) => {
  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={style.message}>
      {props.messages.map(({ message }) => (
        <div key={message} className={style.item}>
          <div>{message}</div>
        </div>
      ))}
      <form className={style.sendmessage}>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          className={style.textarea}
        />
        <input
          onClick={onSendMessageClick}
          type="button"
          value="Send message"
        />
      </form>
    </div>
  );
};

export default MessagesFromUser;
