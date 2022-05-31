import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {PostDataType} from "../components/Profile/MyPosts/MyPosts";



let rerenderEntireTree = () => {
    console.log('hi')
}

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

let state: StateType = {
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
    sidebar:[
        {id:1, name: "Alex"},
        {id:2, name: "Oleg"},
        {id:3, name: "Irina"}
        ]
}

export let addPost = () => {
    const newPost: PostDataType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state
