const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        username: state.username,
        avatar: state.profileAvatar,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, post: [newPost, ...state.post], newPostText: "" };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (post) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: post,
});

export default profileReducer;
