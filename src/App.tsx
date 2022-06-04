import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, StateType, StoreType} from "./redux/state";

type PropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.store.getState().profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
};

export default App;
