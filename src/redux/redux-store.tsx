import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./propfile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store