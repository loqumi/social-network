import React from "react";
import ProfileAv from "./ProfileAv/ProfileAv";
import ProfileDesc from "./ProfileDesc/ProfileDesc";

const ProfileInfo = (props) => {
  return (
    <div className="flex container">
      <ProfileAv
        src={props.avatar}
        alt="avatar"
      />
      <ProfileDesc infoabout={props.infoabout} username={props.username}/>
    </div>
  );
};

export default ProfileInfo;
