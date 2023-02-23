import React from "react";
import style from './NewPost.module.css'


const NewPost = (props) => {
    let newPostElement = React.createRef();

    let newPost = () => {
        props.createNewPost();
        newPostElement.current.value = "";
    }
    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return(
        <div className={style.container}>
            <h3>Create New Post</h3>
            <textarea ref={newPostElement} onChange={postOnChange} value={props.newPostText}  placeholder="How does the cat feel?"/>
            <label htmlFor="newPost"></label>
            <button onClick={newPost} >Create</button>
        </div>
    )
}
export default NewPost 