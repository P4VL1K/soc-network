import React, {ReactNode} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import { compose } from 'redux';

type PropsType = {
    login: null | string
    isAuth: boolean
    setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<PropsType, {children: ReactNode}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        .then(response => {
            debugger
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render () {
        return <Header {...this.props}/>
    }
}


type MapStatePropsType = {
    login: null | string
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData}) (HeaderContainer)
export default compose<React.FC>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData})
)(HeaderContainer)