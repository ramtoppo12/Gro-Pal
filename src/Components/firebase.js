// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
require("firebase/auth");
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyBlJPrZbljhf6BXsAKS4Jo-uAkJX8PTK_0",
  authDomain: "gro-pal.firebaseapp.com",
  databaseURL: "https://gro-pal.firebaseio.com",
  projectId: "gro-pal",
  storageBucket: "gro-pal.appspot.com",
  messagingSenderId: "550414239601",
  appId: "1:550414239601:web:87dbe9ccf23a14fbf918d0",
  measurementId: "G-1DSP9HSLF3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };