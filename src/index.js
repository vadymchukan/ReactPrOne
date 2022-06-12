import React from "react";
import reportWebVitals from './reportWebVitals';
import store  from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { addPost } from './redux/state';
// import { updateNewPostText } from './redux/state';
import {BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state)=>{
  
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={ state} dispatch={ store.dispatch.bind(store) } store={ store }/>
    </React.StrictMode>
    </BrowserRouter>
  );
}

rerenderEntireTree(store.getState());
store.subscribe( ()=>{
  let state = store.getState();
  rerenderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
