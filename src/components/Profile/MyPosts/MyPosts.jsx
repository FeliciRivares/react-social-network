import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post"; 


const MyPosts = (props) => {
    
    const post = props.postData.map(p => <Post header={p.header} content={p.content} counter={p.counter} date={p.date}/>);

    return(
        <div className={style.wrapper}>
            <h2>Some think about me</h2>
            {post}
        </div>
    )
}
export default MyPosts