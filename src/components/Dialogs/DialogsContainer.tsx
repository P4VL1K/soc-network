import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

type PropsType = {
    store: StoreType
}

const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return <Dialogs store={props.store} updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                    dialogsPage={state}/>
}

export default DialogsContainer