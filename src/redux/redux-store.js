import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = configureStore({
  reducer: {
    profilepage: profileReducer,
    messagespage: messagesReducer,
    sidebar: sidebarReducer,
  },
});

export default store;