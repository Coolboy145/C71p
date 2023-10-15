import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBmgMlq8Pn9mB2PfljpJyDOV5kaF90cHiE",
  authDomain: "c71-project-19088.firebaseapp.com",
  projectId: "c71-project-19088",
  storageBucket: "c71-project-19088.appspot.com",
  messagingSenderId: "333347911762",
  appId: "1:333347911762:web:e4f8c8abcf59f5eedc878b"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
