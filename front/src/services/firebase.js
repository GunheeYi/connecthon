import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDT7jsc0Xj-BQhThShc0rousXg_jqXdeF8",
  authDomain: "strawberry-jam-e7980.firebaseapp.com",
  databaseURL: "https://strawberry-jam-e7980-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "strawberry-jam-e7980",
  storageBucket: "strawberry-jam-e7980.appspot.com",
  messagingSenderId: "986181510114",
  appId: "1:986181510114:web:317806f99c97c0423a0fbb",
  measurementId: "G-E5KYX77927"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;