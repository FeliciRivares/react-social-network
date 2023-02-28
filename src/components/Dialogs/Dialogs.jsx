import React from "react";
import style from "./Dialogs.module.css";
import DialogsListContainer from "./DialogsList/DialogListContainer";
import TextListContainer from "./TextList/TextListContainer";

const Dialogs = (props) => {
  
    return(
        <div className={style.container}>
            <h4>My Dialogs</h4>
            <div className={style.content}> 
              <DialogsListContainer store={props.store}/>
              <TextListContainer store={props.store}
            //    textItems={props.textItems}
               />
            </div>
        </div>
    )
}

export default Dialogs