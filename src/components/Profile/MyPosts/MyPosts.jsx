import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={style.wrapper}>
            <h2>Some think about me</h2>
          <Post/>
          <Post/>
          <Post/>
        </div>
    )
}
export default MyPosts