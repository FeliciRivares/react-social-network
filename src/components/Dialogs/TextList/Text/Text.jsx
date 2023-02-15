import React from "react";
import style from "./Text.module.css"

const Text = (props) => {
    return (
        <div className={style.text}>{props.text}</div>
    )
}

export default Text