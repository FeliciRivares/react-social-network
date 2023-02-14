import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className={style.wrapper}>
            <h2>Some think about me</h2>
          <Post header='Patrik' content='I`m happy cat' counter='2' date='12/03/02'/>
          <Post header='Sirco' content='I`m fell good and you?' counter='19' date='11/03/02'/>
          <Post header='Misa' content='Me first post' counter='2333' date='12/03/01'/>
        </div>
    )
}
export default MyPosts