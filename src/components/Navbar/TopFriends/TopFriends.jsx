import React from "react";
import style from './TopFriends.module.css'

const TopFriends = () =>{
    // const topFriends = props.topFriends.map( p => <li><div><img src={p.img} alt="cat"/></div><p>{p.nameFriend}</p></li>)
    return (
        <div>
        <h3 className={style.header}>Top Friends</h3>
            <ul>
                <li>
                    <div>
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg" alt="cat"/>
                    </div>
                    <p>Cat Name</p>
                </li>
                <li>
                    <div>
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg" alt="cat"/>
                    </div>
                    <p>Cat Name</p>
                </li>
                <li>
                    <div>
                        <img src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg" alt="cat"/>
                    </div>
                    <p>Cat Name</p>
                </li>
            </ul>
        </div>
    )
}
export default TopFriends