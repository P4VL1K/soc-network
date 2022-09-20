import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo