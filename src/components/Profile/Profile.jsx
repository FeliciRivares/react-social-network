import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import NewPost from "./NewPost/NewPost";
import style from "./Profile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";


const Profile = (props) =>{
    return(
        <div className={style.content}>
        <div className={style.img}>
          <img src="https://cdn1-www.cattime.com//assets/uploads/2019/03/cattime_logo_horizontal_primarycolor_light_bg_png.png" alt=""/>
        </div>
        <ProfileDetail/>
        <NewPost dispatch={props.dispatch} profile={props.profile} />
        <MyPosts postData={props.data.postData}/>
      </div>
    )
}

export default Profile