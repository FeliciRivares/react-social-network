import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import NewPostsContainer from "./NewPost/NewPostsContainer";
import style from "./Profile.module.css"
import ProfileDetail from "./ProfileDetail/ProfileDetail";


const Profile = (props) =>{
    return(
        <div className={style.content}>
        <div className={style.img}>
          <img src="https://cdn1-www.cattime.com//assets/uploads/2019/03/cattime_logo_horizontal_primarycolor_light_bg_png.png" alt=""/>
        </div>
        <ProfileDetail/>
        <NewPostsContainer store={props.store}
        // dispatch={props.dispatch} profile={props.profile}
         />
        <MyPostsContainer store={props.store} 
        // postData={props.data.postData}
        />
      </div>
    )
}

export default Profile