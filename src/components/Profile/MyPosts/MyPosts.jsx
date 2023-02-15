import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post"; 

const postData = [
    {id:1, header: 'Patrik', content: 'I`m happy cat', counter: '2', date: '10/03/02' },
    {id:2, header: 'Sirco', content: 'I`m fell good and you?', counter: '23', date: '12/03/02' },
    {id:3, header: 'Misa', content: 'Me first post', counter: '12', date: '22/08/02' },
]
const post = postData.map(p => <Post header={p.header} content={p.content} counter={p.counter} date={p.date}/>);

const MyPosts = () => {
    return(
        <div className={style.wrapper}>
            <h2>Some think about me</h2>
            {post}
        </div>
    )
}
export default MyPosts