import React, {ReactNode} from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: null | string
    isAuth: boolean
    // children?: ReactNode
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://i.ytimg.com/vi/6_ORByJDOEQ/hqdefault.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header