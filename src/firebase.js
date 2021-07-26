import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBorkCdNHU29hSqnXP47fKNN8Cm-Hk22sk",
    authDomain: "chat-web-app-a9949.firebaseapp.com",
    databaseURL: "https://chat-web-app-a9949-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-a9949",
    storageBucket: "chat-web-app-a9949.appspot.com",
    messagingSenderId: "880373274396",
    appId: "1:880373274396:web:18783d2316dd6644db0cd9",
    measurementId: "G-Q80YXSBT51"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;