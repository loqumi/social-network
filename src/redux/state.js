import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilepage: {
      username: "Egor Kirdyapin",

      profileAvatar: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",

      infoabout: [
        { title: "Date of Birth:", value: "17.04.2001" },
        { title: "City:", value: "Fergana" },
        { title: "Education:", value: "Vocational secondary" },
        { title: "Website:", value: "http://github.com/loqumi" },
      ],
      post: [
        {
          username: "User 2",
          avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
          message: "Hi, how are you?",
          likesCount: 15,
        },
        {
          username: "User 2",
          avatar: "https://vraki.net/sites/default/files/inline/images/2_3.png",
          message: "It`s my first post!",
          likesCount: 31,
        },
      ],
      newPostText: "",
    },
    messagespage: {
      chats: [{ link: "/messages/1", name: "Vasiliy Piraniev" }],
      messages: [{ message: "Hi, what`s up?" }],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Vasya",
          avatar:
            "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
        },
        {
          id: 2,
          name: "Semen",
          avatar:
            "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
        },
        {
          id: 3,
          name: "Kolya",
          avatar:
            "https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg",
        },
      ],
      sidebarnav: [
        { href: "profile", title: "Profile" },
        { href: "messages", title: "Messages" },
        { href: "news", title: "News" },
        { href: "music", title: "Music" },
        { href: "settings", title: "Settings" },
      ],
    },
  },
  _callBackObserver() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callBackObserver = observer;
  },

  dispatch(action) {
    this._state.profilepage = profileReducer(this._state.profilepage, action);
    this._state.messagespage = messagesReducer(
      this._state.messagespage,
      action
    );
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callBackObserver(this._state);
  },
};

export default store;
window.store = store;
