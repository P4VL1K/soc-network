import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs, {DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {ProfilePageType, StateType, updateNewPostText} from "./redux/state";

type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                               addPost={props.addPost}
                                                               updateNewPostText={props.updateNewPostText}/>}/>
            </div>
            {/*<Profile/>*/}
        </div>
        </BrowserRouter>
    );
};

export default App;
