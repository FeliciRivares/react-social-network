import React from "react";
import style from "./Dialogs.module.css"

const Dialogs = () => {
    return(
        <div className={style.container}>
            <h4>My Dialogs</h4>
            <div className={style.content}> 
                <div className={style.dialogsList}>
                    <div className={style.dialog}>
                        Sem weth
                    </div>
                    <div className={style.dialog}>
                        Allan Beck
                    </div>
                    <div className={style.dialog}>
                        Ken be
                    </div>
                </div>
                <div className={style.textList}>
                    <div className={style.text} >Lorem ipsum dolor sit amet consectetur.</div>
                    <div className={style.text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab corporis eos dolor mollitia sint consectetur, laboriosam temporibus rem veniam delectus iusto deleniti recusandae voluptatum praesentium debitis eveniet. Quas, saepe!
                    Nesciunt, quo voluptas voluptatum molestiae eos beatae a quaerat vitae, nam atque magni maiores ab, dolores quod. Quod earum eius et pariatur, dolorem aperiam beatae repellat harum ipsam aliquam soluta.
                    In neque eaque necessitatibus impedit perferendis illum quidem omnis veniam dignissimos asperiores? Perspiciatis fuga cum, culpa eum reiciendis accusantium voluptate eos obcaecati eligendi, rem mollitia minus quis nihil nesciunt labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quaerat!</div>
                    <div className={style.text} >Lorem ipsum dolor sit.</div>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs