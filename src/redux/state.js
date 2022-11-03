const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
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
      messages: [{ time: "30.10.2022", message: "Hi, what`s up?" }],
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
    if (action.type === "ADD-POST") {
      let newPost = {
        username: this._state.profilepage.username,
        avatar: this._state.profilepage.profileAvatar,
        message: this._state.profilepage.newPostText,
        likesCount: 0,
      };
      this._state.profilepage.post.unshift(newPost);
      this._state.profilepage.newPostText = "";
      this._callBackObserver(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilepage.newPostText = action.NewText;
      this._callBackObserver(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreater = (post) => ({type: UPDATE_NEW_POST_TEXT, NewText: post})

export default store;
window.store = store