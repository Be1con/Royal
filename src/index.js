import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'; 

var  config  = {
  apiKey : "AIzaSyBo8X8wy49depPwn_K8RcXYPPDERFddUqg",
  authDomain: "test-27239.firebaseapp.com",
  databaseURL: "https://test-27239.firebaseio.com",
  projectId: "test-27239",
  storageBucket: "test-27239.appspot.com",
  messagingSenderId: "556808780992",
  appId: "1:556808780992:web:67781fd6c9e380b0498125",
  measurementId: "G-QDL4JMY4C2"
};
firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
