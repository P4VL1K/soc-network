import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../Profile";

const ProfileInfo = (props: ProfileType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img src="https://avatarfiles.alphacoders.com/161/161380.png"/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile}/>
            ava + description
        </div>
    </div>
}

export default ProfileInfo