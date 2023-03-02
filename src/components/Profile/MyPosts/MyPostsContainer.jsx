import { connect } from "react-redux";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
    return {
        postData: state.profile.postData
    }
}
const MyPostsContainer = connect(mapStateToProps)(MyPosts)

export default MyPostsContainer