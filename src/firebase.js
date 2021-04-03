import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQFpsvT0-Gb5G_0IwOPBGkruLHTlknXUc",
    authDomain: "ecommerce--clone-78d81.firebaseapp.com",
    projectId: "ecommerce--clone-78d81",
    storageBucket: "ecommerce--clone-78d81.appspot.com",
    messagingSenderId: "206521469127",
    appId: "1:206521469127:web:d1bd5479455dce512096e2",
    measurementId: "G-F702F8V9YY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};