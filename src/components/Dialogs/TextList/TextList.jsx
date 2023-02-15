import React from "react";
import style from './TextList.module.css'
import Text from './Text/Text';

let textItems =[
    {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing."},
    {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptas. Nemo eveniet nihil, accusamus dolorem corrupti delectus expedita recusandae. Sunt quis adipisci saepe consequatur assumenda itaque sed repudiandae vero tempore iste doloribus natus omnis illo! Tempore eos ad harum?"},
    {id: 3, text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nihil temporibus qui aspernatur nesciunt nulla dicta provident! Id, earum voluptatibus!"},
    {id: 4, text: "Lorem ipsum dolor sit."},
]

let textItem = textItems.map(t => <Text text={t.text}/>)

const TextList = (props) =>{
    return (
        <div className={style.textList}>
               {textItem} 
        </div>
    )
}

export default TextList

