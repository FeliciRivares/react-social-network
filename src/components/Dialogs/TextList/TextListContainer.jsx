import React from "react";
import TextList from './TextList';
import { sendMessage, updateMessageText } from "../../../redux/dialogs-reducer";


const TextListContainer = (props) =>{
   let state = props.store.getState();

    let writeMessage = (text) => {
       let action = updateMessageText(text);
       props.store.dispatch(action); 
    }

    let send = () => {
        props.store.dispatch(sendMessage())
    }
    return (
        <TextList newMessageText={state.dialog.newMessageText} textItems={state.dialog.textItems} updateMessageText={writeMessage} sendMessage={send}/>
    )
}

export default TextListContainer

