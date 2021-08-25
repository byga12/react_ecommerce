import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAeNbcTWfzbYoO7CdS1E-cJ_lysA_j16-8",
  authDomain: "react-ecommerce-8ec89.firebaseapp.com",
  projectId: "react-ecommerce-8ec89",
  storageBucket: "react-ecommerce-8ec89.appspot.com",
  messagingSenderId: "779273848542",
  appId: "1:779273848542:web:849f261785341ba3daa44f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.firestore = firebase.firestore();
export default firebase;
