// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAv-mwO9JDimOy_ob84NREwJ_brom2sS8",
  authDomain: "mini-blog-6b081.firebaseapp.com",
  projectId: "mini-blog-6b081",
  storageBucket: "mini-blog-6b081.appspot.com",
  messagingSenderId: "135584323227",
  appId: "1:135584323227:web:e8069c470d9e304ee2583e",
  measurementId: "G-ZXYJ0GXMT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};