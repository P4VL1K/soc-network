import React from "react";
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";



class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (<div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img src={u.photoUrl} className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                </span>
                    <span>
                    <div>Страна: {u.location?.country ? u.location.country : 'не указана'}</div>
                    <div>Город: {u.location?.city ? u.location.city : 'не указан'}</div>
                </span>
                </div>)
            }
        </div>)
    }
}

export default Users