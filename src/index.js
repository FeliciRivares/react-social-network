import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const postData = [
  {id:1, header: 'Patrik', content: 'I`m happy cat', counter: '2', date: '10/03/02' },
  {id:2, header: 'Sirco', content: 'I`m fell good and you?', counter: '23', date: '12/03/02' },
  {id:3, header: 'Misa', content: 'Me first post', counter: '12', date: '22/08/02' },
]
const textItems =[
  {id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing."},
  {id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, voluptas. Nemo eveniet nihil, accusamus dolorem corrupti delectus expedita recusandae. Sunt quis adipisci saepe consequatur assumenda itaque sed repudiandae vero tempore iste doloribus natus omnis illo! Tempore eos ad harum?"},
  {id: 3, text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nihil temporibus qui aspernatur nesciunt nulla dicta provident! Id, earum voluptatibus!"},
  {id: 4, text: "Lorem ipsum dolor sit."},
]
const dialog =[
  {id:1, name:'Ben Feel'},
  {id:2, name:'Lii Ben'},
  {id:3, name:'Ben Geern'},
  {id:4, name:'Alla New'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialog={dialog} textItems={textItems} postData={postData}/>
  </React.StrictMode>
);


