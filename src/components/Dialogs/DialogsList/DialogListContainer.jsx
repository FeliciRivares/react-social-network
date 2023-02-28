import React from "react";
import DialogsList from "./DialogsList";

const DialogsListContainer = (props) =>{ 
    let state = props.store.getState();

    return(
        <DialogsList dialog={state.dialog.dialog}/>
    )
}
export default DialogsListContainer