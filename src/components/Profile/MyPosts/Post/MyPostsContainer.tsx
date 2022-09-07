import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/propfile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from 'redux';

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MapStatePropsType = {
    posts: Array<PostDataType>
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)