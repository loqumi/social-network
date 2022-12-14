import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.userspage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setusers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
