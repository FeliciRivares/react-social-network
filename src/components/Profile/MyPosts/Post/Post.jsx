import React from "react";
import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5pL9EknuomjF1shh2CYTGcwpWzh41ZzwUg-AOak&s" alt="cat"/>
            </div>
            <div className={style.content}>
                <h3>Post header</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum voluptatibus nisi corrupti delectus autem quos exercitationem labore eius quisquam.</p>
                <span>23/04/05</span>
                
            </div>
            <button>like</button>

           
        </div>
    )
}
export default Post