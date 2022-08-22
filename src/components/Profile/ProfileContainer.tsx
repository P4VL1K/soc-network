import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/propfile-reducer";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }
    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <div>
                    <Profile {...this.props} profile={this.props.profile} />
                </div>
            </div>)
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: null) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }

let WithUrlDataContainerComponent = withRouter(ProfileContainer as any)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)