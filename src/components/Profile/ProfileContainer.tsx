import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/propfile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: null) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId ).then(response => {
            this.props.setUserProfile(response.data)
        })
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         setUserProfile: (profile: null) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }

let WithUrlDataContainerComponent = withRouter(ProfileContainer as any)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)