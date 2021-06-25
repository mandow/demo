// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAzXgpD9_t0xOn8qjAQoHbjeYIAUQgTT4",
    authDomain: "althacare-c4bbc.firebaseapp.com",
    projectId: "althacare-c4bbc",
    storageBucket: "althacare-c4bbc.appspot.com",
    messagingSenderId: "1018347193310",
    appId: "1:1018347193310:web:766bffb9e417fb07f4934f",
    measurementId: "G-47G129CMYF"
  };
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();