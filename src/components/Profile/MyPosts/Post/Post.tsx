import React from 'react';
import s from './Post.module.css'

type PostType = {
    message:string
    likesCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            {props.message}
        </div>
    );
}

export default Post