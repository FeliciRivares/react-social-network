import React from "react";
import style from './NewPost.module.css'

const NewPost = () => {
    return(
        <div className={style.container}>
            <h3>Create New Post</h3>
            <textarea placeholder="How does the cat feel?"></textarea>
            <label htmlFor="newPost"></label>
            <button>Create</button>
        </div>
    )
}
export default NewPost