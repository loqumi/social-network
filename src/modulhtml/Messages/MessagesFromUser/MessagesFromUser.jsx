import React from "react";
import style from "./MessagesFromUser.module.css";

const MessagesFromUser = (props) => {

  let writeMessage = React.createRef();

  let sendMessage = () => {
    let newMessage =  writeMessage.current.value;
    alert(newMessage)
  }

  return (
    <div className={style.message}>
      {props.messages.map(({ time, message }) => (
        <div key={time} className={style.item}>
          <div>{message}</div>
          <div className={style.time}>{time}</div>
        </div>
      ))}
      <form className={style.sendmessage}>
        <textarea ref={writeMessage} className={style.textarea}></textarea>
        <input onClick={sendMessage} type="button" value="Send message"/>
      </form>
    </div>
  );
};

export default MessagesFromUser;
