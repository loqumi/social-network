import UserChats from "./UserChats";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    chats: state.messagespage.chats,
  };
};

const UserChatsContainer = connect(mapStateToProps)(UserChats);
export default UserChatsContainer;
