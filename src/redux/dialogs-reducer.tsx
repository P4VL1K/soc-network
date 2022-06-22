import {ActionsTypes, DialogsPageType} from "./store";

const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export type sendMessageCreatorType = {
    type: 'SEND_MESSAGE'
}
export type updateNewMessageBodyCreatorType = {
    type: 'NEW_MESSAGE_BODY'
    body: string
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
    ],
    newMessageBody: 'ewdr',
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {

    switch (action.type) {
        case NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}] //גלוסעמ push()
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (): sendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): updateNewMessageBodyCreatorType => ({
    type: NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer