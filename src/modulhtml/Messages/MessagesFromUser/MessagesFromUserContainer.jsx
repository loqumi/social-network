import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/messages-reducer";
import MessagesFromUser from "./MessagesFromUser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messages: state.messagespage.messages,
    newMessageBody: state.messagespage.newMessageBody,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const MessagesFromUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesFromUser);

export default MessagesFromUserContainer;
