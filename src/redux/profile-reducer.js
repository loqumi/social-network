const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        username: state.username,
        avatar: state.profileAvatar,
        message: state.newPostText,
        likesCount: 0,
      };
      state.post.unshift(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.NewText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (post) => ({
  type: UPDATE_NEW_POST_TEXT,
  NewText: post,
});

export default profileReducer;
