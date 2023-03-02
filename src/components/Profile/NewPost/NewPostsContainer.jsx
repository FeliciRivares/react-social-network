import { connect } from "react-redux";
import {createNewPostCreator, updateNewPostCreator } from '../../../redux/profile-reducer'
import NewPost from "./NewPost";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        createNewPost: () => {
            dispatch(createNewPostCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostCreator(text))
        },
    }
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostsContainer 