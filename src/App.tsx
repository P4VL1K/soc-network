import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import  UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login";



const App = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        // @ts-ignore
                        <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() =>
                        // @ts-ignore
                        <ProfileContainer />}/>
                    <Route path='/users' render={() =>
                        // @ts-ignore
                        <UsersContainer />}/>
                    <Route path='/login' render={() => <Login />}/>
                </div>
                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
};

export default App;
