import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

type ProfileType = {
    // store: StoreType
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPostsContainer />

            </div>
        </div>)
}

export default Profile