import React from "react";
import {createNewPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import NewPost from "./NewPost";



const NewPostContainer = (props) => {
    let state = props.store.getState();

    let newPost = () => {
        props.store.dispatch(createNewPostActionCreator())
        // props.createNewPost();
        // let action = createNewPostActionCreator()
        // props.dispatch(action)
    }
    let postOnChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }



    return(<NewPost updateNewPostText={postOnChange}  
                    createNewPost={newPost}
                    newPostText={state.profile.newPostText}/>)
}

export default NewPostContainer 