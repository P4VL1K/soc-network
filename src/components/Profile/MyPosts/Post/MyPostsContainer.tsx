import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/propfile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from 'redux';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MapStatePropsType = {
    newPostText: string
    posts: Array<PostDataType>
}
type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)