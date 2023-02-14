import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5pL9EknuomjF1shh2CYTGcwpWzh41ZzwUg-AOak&s" alt="cat"/>
            </div>
            <div className={style.content}>
                <h3>{props.header}</h3>
                <p>{props.content}</p>
                <span>{props.date}</span>
                
            </div>
            <button>Like {props.counter}</button>

           
        </div>
    )
}
export default Post