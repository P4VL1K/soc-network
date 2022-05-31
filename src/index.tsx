import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render( <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root') as HTMLElement
    );
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
