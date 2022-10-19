import React from "react";
import style from "./MyPost.module.css"
const OldPost = (props) => {
     return(
          <div className={style.item}>
               <img className={style.avatar} src={props.src} alt="avatar"></img>
               {props.message}
               <div>
                    <span>Like</span> {props.likesCount}
               </div>
          </div>
     )
}

export default OldPost