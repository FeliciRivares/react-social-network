import React from "react";
import style from './NewPost.module.css'




const NewPost = (props) => {
    let newPostElement = React.createRef();

    let onPostClick = () => {
        props.createNewPost();
        // props.dispatch(createNewPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))
    }
    return(
        <div className={style.container}>
            <h3>Create New Post</h3>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}  placeholder="How does the cat feel?"/>
            <label htmlFor="newPost"></label>
            <button onClick={onPostClick} >Create</button>
        </div>
    )
}
export default NewPost 