import React from "react";
import Dialog from "./Dialog/Dialog.jsx";
import style from './DialogsList.module.css'

const DialogsList = (props) =>{
    let dialogList = props.dialog.map(d => <Dialog id={d.id} name={d.name} />) 
    return(
        <div className={style.dialogsList}>
            {dialogList}
        </div>
    )
}
export default DialogsList