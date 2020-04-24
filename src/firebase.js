
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDgwU04k_EWg6UOI2RyTek6vVOXtJx2VHE",
    authDomain: "him-hack.firebaseapp.com",
    databaseURL: "https://him-hack.firebaseio.com",
    projectId: "him-hack",
    storageBucket: "him-hack.appspot.com",
    messagingSenderId: "823202218563",
    appId: "1:823202218563:web:19ee8b9c86d0a2f5f04af6",
    measurementId: "G-S7X8CZ165Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db
