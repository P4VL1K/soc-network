import {ActionsTypes, DialogsPageType} from "./store";

const SEND_MESSAGE = 'SEND_MESSAGE'

export type sendMessageCreatorType = {
    type: 'SEND_MESSAGE'
    newMessageBody: string
}

let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: "Pasha"},
        {id: 2, name: "Alexey"},
        {id: 3, name: "Vlados"},
        {id: 4, name: "Dimas"},
        {id: 5, name: "Sokol"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are You?"},
        {id: 3, message: "Perfect!"},
        {id: 4, message: "Yooo"},
        {id: 5, message: "Akulichhhh"},
    ]
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}] //גלוסעמ push()
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer