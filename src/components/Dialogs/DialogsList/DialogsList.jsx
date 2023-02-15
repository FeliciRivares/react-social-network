import React from "react";
import Dialog from "./Dialog/Dialog.jsx";
import style from './DialogsList.module.css'

// let dialog =[
//     {id:1, name:'Ben Feel'},
//     {id:2, name:'Lii Ben'},
//     {id:3, name:'Ben Geern'},
//     {id:4, name:'Alla New'},
// ]



const DialogsList = (props) =>{
    let dialogList = props.dialog.map(d => <Dialog id={d.id} name={d.name} />) 
    return(
        <div className={style.dialogsList}>
            {dialogList}
        </div>
    )
}
export default DialogsList