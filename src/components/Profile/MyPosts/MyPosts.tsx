import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {InjectedFormProps} from "redux-form/lib/reduxForm";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostDataType>
    addPost: (values: any) => void
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = (values: AddNewPostFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

type AddNewPostFormDataType = {
    newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
           <Field name={'newPostText'} component={'textarea'}/>
        </div>
        <div>
            <button>Add posts</button>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: 'newPostForm'})(AddNewPostForm)