import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./propfile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer, {ActionTypes} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type ActionsType = ActionTypes

export type AppThunk<ReturnType = void> = ThunkAction<void, RootStateType, unknown, ActionsType>

export default store