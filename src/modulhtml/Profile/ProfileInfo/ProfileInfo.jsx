import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileAv from "./ProfileAv/ProfileAv";
import ProfileInfo from "./ProfileDesc/ProfileDesc";

const Profile = () => {
  return (
    <div className="flex container">
      <ProfileAv
        src={"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
        alt="avatar"
      />
      <ProfileInfo username={"Egorka"} />
    </div>
  );
};

const info_about = [
  { title: "Date of Birth" },
  { title: "City" },
  { title: "Education" },
  { title: "Website" },
];
export default Profile;
