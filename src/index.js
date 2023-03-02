import React from 'react'
import ReactDOM  from 'react-dom/client';
import './index.css'
import App from "./App"
import store from './redux/redux-store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
// let renderFullPage = () => {
  

// }
// renderFullPage(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     renderFullPage(state)
// });



 //<App    dispatch={store.dispatch.bind(store)}
 //                   store={store}
//                  state={state}/>  


