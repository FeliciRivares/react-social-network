import React from "react";
import style from './TextList.module.css'
import Text from './Text/Text';
import { sendMessage, updateMessageText } from "../../../redux/dialogs-reducer";


const TextList = (props) =>{
    let textAreaSend = React.createRef();

    let writeMessage = () => {
        let text = textAreaSend.current.value;
        props.dispatch(updateMessageText(text))
    }

    let send = () => {
        props.dispatch(sendMessage())
        textAreaSend.current.value = '';
    }


    let textItem = props.textItems.map(t => <Text textElse={t.textElse} text={t.text}/>)
    return (
        <div className={style.container}>
            <div className={style.textContent}>
                <div className={style.textList}>
                    {textItem} 
                </div>
            </div>
            <div className={style.addNewPost} >
                <textarea   onChange={writeMessage}
                            ref={textAreaSend}
                            placeholder="Write something..."
                            onKeyDown={event => event.key === 'Enter' && send()}
                           />
                <button onClick={send}>Send</button>
            </div>
        </div>
    )
}

export default TextList

