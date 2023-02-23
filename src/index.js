import React from 'react'
import ReactDOM  from 'react-dom/client';
import './index.css'
import App from "./App"
// import {createNewPost, subscribe, updateNewPostText} from './redux/state'
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderFullPage = (data) => {
    root.render(
        <React.StrictMode>
            <App    updateNewPostText={store.updateNewPostText.bind(store)}
                    createNewPost={store.createNewPost.bind(store)}
                    data={data}/>
        </React.StrictMode>
    );

}
renderFullPage(store.getData())
store.subscribe(renderFullPage);






