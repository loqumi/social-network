import {
  addPostActionCreator,
  updateNewPostTextActionCreater,
} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilepage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (post) => {
      dispatch(updateNewPostTextActionCreater(post));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
export default NewPostContainer;
