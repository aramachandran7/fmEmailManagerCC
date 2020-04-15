import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBCO1wfAS6YVrw3-ss6aORZcqO2f23MG94",
    authDomain: "hopeim-d3fd8.firebaseapp.com",
    databaseURL: "https://hopeim-d3fd8.firebaseio.com",
    projectId: "hopeim-d3fd8",
    storageBucket: "hopeim-d3fd8.appspot.com",
    messagingSenderId: "356189827522",
    appId: "1:356189827522:web:0fc9fcd0dba5ef0867e65b"
  };


firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true})
export default firebase