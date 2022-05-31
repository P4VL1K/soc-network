import React, {createRef} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
            props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add posts</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }
