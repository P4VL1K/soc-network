import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";


export let rerenderEntireTree = () => {
    ReactDOM.render( <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root') as HTMLElement
    );
}

rerenderEntireTree()

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree()
})
