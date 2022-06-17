import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

type mapStatePropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //законнектить Dialogs по правилам mapStateToProps и mapDispatchToProps

export default DialogsContainer