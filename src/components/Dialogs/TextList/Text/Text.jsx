import React from "react";
import style from "./Text.module.css"

const Text = (props) => {
    
    return (
        <div className={style.content}>
        <div   className={style.text}>{props.text}</div>
        <div className={style.textElse}>{props.textElse}</div>
        </div>
    )
}

export default Text