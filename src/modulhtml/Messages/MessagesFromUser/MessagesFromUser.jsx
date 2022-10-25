import React from "react";
import style from "./MessagesFromUser.module.css";

const MessagesFromUser = () => {
  return (
    <ul className={style.ul}>
      {messages.map(({ time, message }) => (
        <div key={time} className={style.item}>
          <div>{message}</div>
          <div className={style.time}>{time}</div>
        </div>
      ))}
    </ul>
  );
};

const messages = [{ time: "12.12.2001", message: "ПРиВЕТ МЕДВЕД))" }];
export default MessagesFromUser;
