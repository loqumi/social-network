import React from "react";
import ProfileAv from "./ProfileAv/ProfileAv";
import ProfileDesc from "./ProfileDesc/ProfileDesc";

const ProfileInfo = (props) => {
  let state = props.store.getState().profilepage;
  return (
    <div className="flex container">
      <ProfileAv src={state.profileAvatar} alt="avatar" />
      <ProfileDesc infoabout={state.infoabout} username={state.username} />
    </div>
  );
};

export default ProfileInfo;
