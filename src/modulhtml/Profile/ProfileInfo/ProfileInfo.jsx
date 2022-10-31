import React from "react";
import ProfileAv from "./ProfileAv/ProfileAv";
import ProfileDesc from "./ProfileDesc/ProfileDesc";

const ProfileInfo = (props) => {
  return (
    <div className="flex container">
      <ProfileAv
        src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
        alt="avatar"
      />
      <ProfileDesc username={"Egor Kirdypin"} state={props.state.infoabout}/>
    </div>
  );
};

export default ProfileInfo;
