import React from "react";
import style from "./Profile.module.css"
import ProfileDetail from "./ProfileDetail";

const Profile = () =>{
    return(
        <div className={style.content}>
        <div className={style.img}>
          <img src="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634__340.png" alt=""/>
        </div>
        <ProfileDetail/>
        <div>
          my post
          <div>
            new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
        
      </div>
    )
}

export default Profile