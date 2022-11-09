import Post from "./Post";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    post: state.profilepage.post,
  };
};

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;
