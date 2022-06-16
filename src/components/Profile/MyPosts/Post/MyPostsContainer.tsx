import React from 'react';
import {MyPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/propfile-reducer";
import StoreContext from "../../../StoreContext";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    // store: any
}


export const MyPostsContainer = (props: MyPostsPropsType) => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                                newPostText={state.profilePage.newPostText}
                                posts={state.profilePage.posts}
                                addPost={addPost}/>
            }
        }
        </StoreContext.Consumer>
    )
}

