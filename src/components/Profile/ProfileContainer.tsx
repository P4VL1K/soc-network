import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/propfile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            <div>
                <div>
                    <Profile {...this.props} profile={this.props.profile} />
                </div>
            </div>)
    }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//
//
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)


export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
)(ProfileContainer)