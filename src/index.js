import React from 'react'
import ReactDOM  from 'react-dom/client';
import './index.css'
import App from "./App"
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderFullPage = (data) => {
    root.render(
        <React.StrictMode>
            <App    dispatch={store.dispatch.bind(store)}
                    data={data}/>
        </React.StrictMode>
    );

}
renderFullPage(store.getData())
store.subscribe(renderFullPage);






