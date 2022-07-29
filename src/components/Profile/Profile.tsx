import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

export type ProfileType = {
    profile: null
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </div>)
}

export default Profile