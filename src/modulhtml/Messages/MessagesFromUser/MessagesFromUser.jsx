import React from "react";
import style from "./MessagesFromUser.module.css";

const MessagesFromUser = () => {
  return (
    <div className={style.message}>
      {messages.map(({ time, message }) => (
        <div key={time} className={style.item}>
          <div>{message}</div>
          <div className={style.time}>{time}</div>
        </div>
      ))}
    </div>
  );
};

const messages = [
  { time: "12.12.2001", message: "ПРиВЕТ МЕДВЕД))" },
  { time: "12.1.2001", message: "ПРиВЕТ МЕДВЕД))" },
  { time: "12.4.2001", message: "ПРиВЕТ МЕДВЕД))" },
  { time: "12.2.2001", message: "ПРиВЕТ МЕДВЕД))" },
  { time: "12.6.2001", message: "ПРиВЕТ МЕДВЕД))" },
  { time: "12.5.2001", message: "ПРиВЕТ МЕДВЕД))" },
];
export default MessagesFromUser;
