import React, {ChangeEvent, useState} from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'i am status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks