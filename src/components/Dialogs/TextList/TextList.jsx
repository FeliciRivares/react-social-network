import React from "react";
import style from './TextList.module.css'
import Text from './Text/Text';


const TextList = (props) =>{
    let textAreaSend = React.createRef();
    let send = () => {
        let text = textAreaSend.current.value;
        alert(text);
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
                <textarea ref={textAreaSend} placeholder="Write something..."></textarea>
                <button onClick={send}>Send</button>
            </div>
        </div>
    )
}

export default TextList

