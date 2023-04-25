// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAxgLTrWQxmKZK_O4X34vUonRk2RpQLNiU",
    authDomain: "vlogvue-72e21.firebaseapp.com",
    projectId: "vlogvue-72e21",
    storageBucket: "vlogvue-72e21.appspot.com",
    messagingSenderId: "978309715381",
    appId: "1:978309715381:web:86db8e255f382ae78735fc",
    measurementId: "G-TPTVVLSM6F"
  };

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();
  let timestamp = firebase.firestore.FieldValue.ServerTimeStamp;

export {db,timestamp}