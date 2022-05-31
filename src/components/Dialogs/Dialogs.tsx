import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message  from "./Message/Message";
import {DialogsPageType, StateType} from "../../redux/state";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

type PropsType ={
    state: DialogsPageType
}

const Dialogs = (props: PropsType) => {
    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map(message => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs