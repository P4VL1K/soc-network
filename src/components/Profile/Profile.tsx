import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, updateNewPostText} from "../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         updateNewPostText={props.updateNewPostText}
                         addPost={props.addPost}/>


            </div>
        </div>)
}

export default Profile