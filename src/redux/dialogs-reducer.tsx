import {ActionsTypes, DialogsPageType} from "./state";

const NEW_MESSAGE_BODY = 'NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


export type sendMessageCreatorType = {
    type: 'SEND_MESSAGE'
}
export type updateNewMessageBodyCreatorType = {
    type: 'NEW_MESSAGE_BODY'
    body: string
}


const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = (): sendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): updateNewMessageBodyCreatorType => ({
    type: NEW_MESSAGE_BODY,
    body: body
})

    // if (action.type === NEW_MESSAGE_BODY) {
    //     state.newMessageBody = action.body;
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = state.newMessageBody
    //     state.newMessageBody = ''
    //     state.messages.push({id: 6, message: body})
    // }
    //
    // return state


export default dialogsReducer