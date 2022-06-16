import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

type PropsType = {
    // store: StoreType
}

const DialogsContainer = (props: PropsType) => {




    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
       return  <Dialogs store={store}
                 updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer