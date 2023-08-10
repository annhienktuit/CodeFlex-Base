import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFEiLZt5FmqmHk29uz3ZhEjra82dIZgpQ",
  authDomain: "codeflex-8ef8c.firebaseapp.com",
  databaseURL:
    "https://codeflex-8ef8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "codeflex-8ef8c",
  storageBucket: "codeflex-8ef8c.appspot.com",
  messagingSenderId: "665602612237",
  appId: "1:665602612237:web:ea2100d4b406b2c10e0944",
  measurementId: "G-3RF9RHBSV9",
};
// Initialize Firebase
const fbApp = firebase.initializeApp(firebaseConfig);

export default fbApp;
