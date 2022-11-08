const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  chats: [{ link: "/messages/1", name: "Vasiliy Piraniev" }],
  messages: [{ message: "Hi, what`s up?" }],
  newMessageBody: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.text };
    case SEND_MESSAGE:
      let text = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { message: text }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  text: body,
});

export default messagesReducer;
