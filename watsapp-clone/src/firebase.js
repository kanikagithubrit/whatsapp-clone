// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBfmJNqWYSCZryBCC4aQZLrhrv6eWoBlmY",
    authDomain: "watsapp-clone-db611.firebaseapp.com",
    projectId: "watsapp-clone-db611",
    storageBucket: "watsapp-clone-db611.appspot.com",
    messagingSenderId: "1018662102302",
    appId: "1:1018662102302:web:815576e55d880d08efd50f",
    measurementId: "G-S22RWDHJS4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);  //here we initialize thr app , so we pass it this config object right
const db = firebaseApp.firestore();   //now we take  variable db which is basically going to access the firestore instances of our firebase, basically it gets our database
const auth = firebase.auth(); //this is for authentication access
const provider = new firebase.auth.GoogleAuthProvider(); //this is for google authentication provider

export { auth,provider,db };