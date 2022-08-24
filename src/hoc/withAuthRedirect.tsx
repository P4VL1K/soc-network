import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {ComponentType} from "react";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        // @ts-ignore
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}



// export const LoginNavigate: FC = ({children}) => {
//     const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
//     if (!isAuth) return <Redirect to={'/login'} />
//     return <>{children}</>
// }



