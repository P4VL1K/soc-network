import React, {ReactNode} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: null | string
    isAuth: boolean
    logout: () => void
    // children?: ReactNode
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://i.ytimg.com/vi/6_ORByJDOEQ/hqdefault.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>props.login - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header