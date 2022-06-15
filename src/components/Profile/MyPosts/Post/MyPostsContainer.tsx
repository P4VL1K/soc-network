import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/propfile-reducer";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    store: any
}


export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state  = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }
    return (<MyPosts updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} addPost={addPost}/>)
}

