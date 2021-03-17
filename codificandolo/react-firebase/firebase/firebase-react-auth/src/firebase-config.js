import firebase from 'firebase';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDIxz8P7DPWKNgnnc2uq1bFiqP4Hgvo8aw",
  authDomain: "pruebas-react-edb35.firebaseapp.com",
  projectId: "pruebas-react-edb35",
  storageBucket: "pruebas-react-edb35.appspot.com",
  messagingSenderId: "203309459197",
  appId: "1:203309459197:web:f7dc1b1ad6fc5fa9128094",
  measurementId: "G-3H40QB76JZ"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const authentication = fire.auth()

export {authentication}