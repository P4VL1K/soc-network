import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoType = {
    profile: null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        {/*<div>*/}
        {/*    <img src="https://avatarfiles.alphacoders.com/161/161380.png"/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo