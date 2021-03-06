import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type AddPostActionType = {
    type: 'ADD_POST'
}
export type UpdateNewPostActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 12}
    ],
    newPostText: "dgfd"
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer