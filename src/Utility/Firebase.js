import  firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5rvCHsZ8biylwxwHZMS-izIqU-KH1l50",
  authDomain: "clone-e538c.firebaseapp.com",
  projectId: "clone-e538c",
  storageBucket: "clone-e538c.firebasestorage.app",
  messagingSenderId: "825849599617",
  appId: "1:825849599617:web:bcd1e6fcc496cbb0ac1f80",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()
