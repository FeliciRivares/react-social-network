import React from "react";
import style from './NewPost.module.css'

const NewPost = ({createNewPost}) => {
    let newPostElement = React.createRef();

    let textArea = () => {
        debugger
        let text = newPostElement.current.value;
        createNewPost(text)
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