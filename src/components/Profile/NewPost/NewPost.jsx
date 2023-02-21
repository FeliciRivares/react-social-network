import React from "react";
import style from './NewPost.module.css'

const NewPost = () => {
    let newPostElement = React.createRef();

    let textArea = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    return(
        <div className={style.container}>
            <h3>Create New Post</h3>
            <textarea ref={newPostElement}  placeholder="How does the cat feel?"></textarea>
            <label htmlFor="newPost"></label>
            <button onClick={textArea} >Create</button>
        </div>
    )
}
export default NewPost