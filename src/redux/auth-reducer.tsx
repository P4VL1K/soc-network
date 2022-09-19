import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";

const SET_USER_DATA = 'SET_USER_DATA';

type SetUserDataActionType = {
    type: 'SET_USER_DATA'
    payload: DataType
    isAuth: boolean
}

type DataType = {
    userId: number | null
    email: string | null
    login: string | null
}

export type ActionTypes = SetUserDataActionType | FormAction


export type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            console.log('reducer, ', action.payload)
            return {
                ...state,
                isAuth: true,
            ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({type: SET_USER_DATA, payload: {userId, email, login}, isAuth})

export const getAuthUserData = () => (dispatch: Dispatch<SetUserDataActionType>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                console.log('SET USER DATA')
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.data.message.length > 0 ? response.data.data.message[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logout = () => (dispatch: Dispatch<SetUserDataActionType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer