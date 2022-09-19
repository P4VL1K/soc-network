import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../validation/validators";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {RootStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from './../components/common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    console.log(props)
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'email'} name={'email'} component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'password'} name={'password'} component={Input}
                   validate={[required]} type={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} component={Input} name={'rememberMe'}
                   validate={[required]}/>remember me
        </div>x
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginType | any) => {

    console.log(props)
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)