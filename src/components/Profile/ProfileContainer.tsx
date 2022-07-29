import React, {Component} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/propfile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profile: null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: null) => void
}

class ProfileContainer extends Component<MapStatePropsType & mapDispatchToPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer as any)