import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

export type ProfileType = {
    profile: null
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer/>
            </div>
        </div>)
}

export default Profile