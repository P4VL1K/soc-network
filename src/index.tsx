import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "./components/StoreContext";


export let rerenderEntireTree = () => {
    ReactDOM.render( <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
        </React.StrictMode>,
        document.getElementById('root') as HTMLElement
    );
}

rerenderEntireTree()

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree()
})
