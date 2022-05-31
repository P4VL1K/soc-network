import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://avatarfiles.alphacoders.com/161/161380.png"/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo