import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/state";


export let rerenderEntireTree = () => {
    ReactDOM.render( <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root') as HTMLElement
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
