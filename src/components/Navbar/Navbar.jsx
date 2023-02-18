import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import TopFriends from "./TopFriends/TopFriends";

const Navbar = (props) => {
    return(
        <nav className={style.nav}>
            <div className={style.item}> 
                <NavLink className = { navData => navData.isActive ? style.active : style.item } to="/profile" >Profile </NavLink></div>
            <div className={style.item}>
                <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/dialogs'>Dialogs</NavLink></div>
            <div className={style.item}> 
                <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/news'>News</NavLink> </div>  
            <div className={style.item}>
                <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/music'>Music</NavLink> </div>  
            <div className={style.item} >
                <NavLink className = { navData => navData.isActive ? style.active : style.item } to='/settings'>Settings</NavLink></div>  
            <div className={style.item + ' ' + style.friends} >
                <NavLink topFriends={props.topFriends} className = { navData => navData.isActive ? style.active : style.item } to='/friends'>
                    <TopFriends/>
                </NavLink></div>
        </nav>
    )
}

export default Navbar;