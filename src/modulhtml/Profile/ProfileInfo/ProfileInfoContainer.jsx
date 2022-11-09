import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    src: state.profilepage.profileAvatar,
    infoabout: state.profilepage.infoabout,
    username: state.profilepage.username,
  };
};

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;
