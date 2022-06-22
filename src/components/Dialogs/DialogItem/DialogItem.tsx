import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <img src="https://shapka-youtube .ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" width="30px" className={s.picture}/>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem

