import React from "react";
import style from './Navbar.module.css'

const Navbar = () => {
    return(
        <nav className={style.nav}>
            <div> <a href="./" >Profile </a> </div>
            <div> <a href='./'>Music</a> </div>
            <div> <a href='./'>Game</a> </div>  
            <div> <a href='./'>About</a> </div>  
            <div> <a href='./'>News</a> </div>  
        </nav>
    )
}

export default Navbar;