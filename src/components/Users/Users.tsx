import React from "react";
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";



export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
                fullName: "Dmitry",
                status: "I am a boss",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
                fullName: "Oleg",
                status: "I am a boss too",
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                followed: false,
                photoUrl: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
                fullName: "Nikolay",
                status: "I am a boss too",
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }


    return (<div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
    </div>)
}