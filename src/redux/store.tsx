import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import profileReducer, {AddPostActionType, UpdateNewPostActionType} from "./propfile-reducer";
import dialogsReducer, {sendMessageCreatorType, updateNewMessageBodyCreatorType} from "./dialogs-reducer";
import sidebarReducer, {initialStateSideBarType} from "./sidebar-reducer";


export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    newMessageBody: string
}
export type SidebarType = {
    id: number
    name: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: initialStateSideBarType
}
export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostActionType
    | sendMessageCreatorType
    | updateNewMessageBodyCreatorType


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It is my first post", likesCount: 12}
            ],
            newPostText: "dgfd"
        },
        dialogsPage: {
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
        },
        sidebar: {
            sideBars: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Oleg"},
                {id: 3, name: "Irina"}
            ]
        }

    },
    _callSubscriber() {
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}


export default store
