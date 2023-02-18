import React from "react";
import style from './TextList.module.css'
import Text from './Text/Text';


const TextList = (props) =>{
    let textItem = props.textItems.map(t => <Text textElse={t.textElse} text={t.text}/>)
    return (
        <div className={style.textList}>
               {textItem} 
        </div>
    )
}

export default TextList

