import React from "react";
import style from "./MessagesFromUser.module.css";

const MessagesFromUser = (props) => {
  return (
    <div className={style.message}>
      {props.state.messages.map(({ time, message }) => (
        <div key={time} className={style.item}>
          <div>{message}</div>
          <div className={style.time}>{time}</div>
        </div>
      ))}
    </div>
  );
};

export default MessagesFromUser;
