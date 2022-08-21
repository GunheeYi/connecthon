const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

// import firebase from "firebase/app";
// import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyDT7jsc0Xj-BQhThShc0rousXg_jqXdeF8",
//     authDomain: "strawberry-jam-e7980.firebaseapp.com",
//     databaseURL: "https://strawberry-jam-e7980-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "strawberry-jam-e7980",
//     storageBucket: "strawberry-jam-e7980.appspot.com",
//     messagingSenderId: "986181510114",
//     appId: "1:986181510114:web:317806f99c97c0423a0fbb",
//     measurementId: "G-E5KYX77927"
//   };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const createUser = user => functions.database().ref().child(`User/${user.uid}`).set(user)
exports.createUser = functions.auth.user().onCreate(createUser)