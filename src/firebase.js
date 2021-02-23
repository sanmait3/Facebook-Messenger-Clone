import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAilbr-zIOelxzaeRRaxH4I-qVORksUbb4",
    authDomain: "facebook-messenger-clone-3d169.firebaseapp.com",
    projectId: "facebook-messenger-clone-3d169",
    storageBucket: "facebook-messenger-clone-3d169.appspot.com",
    messagingSenderId: "251125283979",
    appId: "1:251125283979:web:229e57368b7b7579e2e88e",
    measurementId: "G-VBG35C699Z"
  });

const db = firebaseApp.firestore();

export default db;