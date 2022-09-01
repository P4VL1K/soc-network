import {PostDataType} from "../components/Profile/MyPosts/MyPosts";
import {sendMessageCreatorType, updateNewMessageBodyCreatorType} from "./dialogs-reducer";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfilePageType = {
    posts: Array<PostDataType>
    newPostText: string
    profile: null
    status: string
}

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

export type AddPostActionType = {
    type: 'ADD_POST'
}
export type UpdateNewPostActionType = {
    type: 'UPDATE_NEW_POST_TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: null
}
export type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostActionType
    | sendMessageCreatorType
    | updateNewMessageBodyCreatorType | SetUserProfileActionType | SetStatusActionType


let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It is my first post", likesCount: 12}
    ],
    newPostText: "dgfd",
    profile: null,
    status: ''
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
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
export const setUserProfile = (profile: null): SetUserProfileActionType => ({type: "SET_USER_PROFILE", profile})
export const setUserStatus= (status: string): SetStatusActionType => ({type: "SET_STATUS", status})

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}



export default profileReducer