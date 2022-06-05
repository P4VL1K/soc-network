import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "./state";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

export type AddPostActionType = {
    type: 'ADD_POST'
}
export type UpdateNewPostActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}


const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

//     if (action.type === ADD_POST) {
//         const newPost: PostDataType = {
//             id: 5,
//             message: state.newPostText,
//             likesCount: 0
//         }
//         state.posts.push(newPost)
//         state.newPostText = '';
//     } else if (action.type === UPDATE_NEW_POST_TEXT) {
//        state.newPostText = action.newText;
//     }
//
//     return state


export default profileReducer