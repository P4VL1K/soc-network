import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}
type SidebarType = {
    id: number
    name: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
}
export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    getState: () => StateType
    _callSubscriber: () => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewPostActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

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
        },
        sidebar: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Oleg"},
            {id: 3, name: "Irina"}
        ]
    },
    _callSubscriber() {
        console.log('hi')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action){
        if (action.type === 'ADD-POST') {
            const newPost: PostDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = (): AddPostActionType =>  ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store
