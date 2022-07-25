import React from "react";
import s from "./users.module.css";
import {UserPropsType} from "../../redux/users-reducer";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserPropsType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{-p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                </span>
                    <span>
                    <span>
                        <div>Name: {u.fullName ? u.fullName : 'not specifield'}</div><div>{u.status}</div>
                    </span>
                </span>
                    <span>
                    <div>Country: {u.location?.country ? u.location.country : 'not specified'}</div>
                    <div>City: {u.location?.city ? u.location.city : 'not specified'}</div>
                </span>
                </div>)
            }
        </div>
    )
}