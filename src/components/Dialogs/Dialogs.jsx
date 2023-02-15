import React from "react";
import style from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import TextList from "./TextList/TextList";

const Dialogs = () => {
    return(
        <div className={style.container}>
            <h4>My Dialogs</h4>
            <div className={style.content}> 
              <DialogsList/>
              <TextList/>
            </div>
        </div>
    )
}

export default Dialogs