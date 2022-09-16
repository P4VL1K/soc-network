import React, {ReactNode} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import { compose } from 'redux';

type PropsType = {
    login: null | string
    isAuth: boolean
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<PropsType, {children: ReactNode}> {
    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
    logout: () => void
}
const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


// export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {setAuthUserData}) (HeaderContainer)
export default compose<React.FC>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {getAuthUserData, logout})
)(HeaderContainer)