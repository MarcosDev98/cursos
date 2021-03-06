import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase/app";



firebase.initializeApp({
  apiKey: "AIzaSyANzw7Jw5McBjsPmHxnBo7y6plxzFNex3M",
  authDomain: "truchigram-59270.firebaseapp.com",
  databaseURL: "https://truchigram-59270.firebaseio.com",
  projectId: "truchigram-59270",
  storageBucket: "truchigram-59270.appspot.com",
  messagingSenderId: "275559307631",
  appId: "1:275559307631:web:804361211e29f653f7309a",
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/**
 * 
 * Este es el config de MI TRUCHIGRAM.
 * 
 * {
  apiKey: "AIzaSyANzw7Jw5McBjsPmHxnBo7y6plxzFNex3M",
  authDomain: "truchigram-59270.firebaseapp.com",
  databaseURL: "https://truchigram-59270.firebaseio.com",
  projectId: "truchigram-59270",
  storageBucket: "truchigram-59270.appspot.com",
  messagingSenderId: "275559307631",
  appId: "1:275559307631:web:804361211e29f653f7309a",
}
 * 
 */
/* 
Esta es la config original
firebase.initializeApp({
  apiKey: "AIzaSyAyXxQijG4eoHvsHEPyPCJTi26roSRXupc",
  authDomain: "truchigram.firebaseapp.com",
  databaseURL: "https://truchigram.firebaseio.com",
  projectId: "truchigram",
  storageBucket: "truchigram.appspot.com",
  messagingSenderId: "887923179137",
  appId: "1:887923179137:web:b8ddab7c7f929486"
}); */