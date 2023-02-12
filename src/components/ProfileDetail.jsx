import React from "react";
import style from './ProfileDetail.module.css'
    const ProfileDetail = () =>{
        return(
            <div className={style.content}>
                <div className={style.imgContainer}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUmoZFeZLZNzyoJKUJXLKXQywaWQEXnEl2g&usqp=CAU" alt="Cat ava img"/>
                </div>
                <div className={style.textContainer}>
                    <h3 className={style.title}>Lorem ipsum dolor sit amet.</h3>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam maiores quasi dolorem placeat exercitationem rerum, repellendus debitis consequatur quae minus expedita voluptatibus totam voluptatum? Labore dicta amet esse fuga.
                    </p>
                </div>
            </div>
        )
    }
export default ProfileDetail
