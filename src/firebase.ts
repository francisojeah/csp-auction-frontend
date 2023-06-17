import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
require('dotenv').config();

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF0CSFlVPuy3C6R3NeGMP2gX87zTXhYNk",
    authDomain: "cspsilentauction.firebaseapp.com",
    projectId: "cspsilentauction",
    storageBucket: "cspsilentauction.appspot.com",
    messagingSenderId: "522609006835",
    appId: "1:522609006835:web:0b6afb93d0b5188031ff86",
    measurementId: "G-R1N5QYJ6V0"
};

// Initialize Firebase
// ;
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export { db }