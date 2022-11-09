import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let store = configureStore({
  reducer: {
    profilepage: profileReducer,
    messagespage: messagesReducer,
    sidebar: sidebarReducer,
    userspage: usersReducer,
  },
});
export default store;
