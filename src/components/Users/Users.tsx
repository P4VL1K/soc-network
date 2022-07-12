import React from "react";
import s from './users.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";



class Users extends React.Component<UsersPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (<div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                    onClick={(e)=>{this.onPageChanged(p)}}
                    >{-p}</span>
                })}
            </div>
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
                        <div>Name: {u.fullName ? u.fullName : 'not specifield'}</div><div>{u.status}</div>
                    </span>
                </span>
                    <span>
                    <div>Country: {u.location?.country ? u.location.country : 'not specified'}</div>
                    <div>City: {u.location?.city ? u.location.city : 'not specified'}</div>
                </span>
                </div>)
            }
        </div>)
    }
}

export default Users