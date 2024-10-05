// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWduItH7rrkbd5sekXnNxw1BnzgD4NtfA",
  authDomain: "data-eb970.firebaseapp.com",
  projectId: "data-eb970",
  storageBucket: "data-eb970.appspot.com",
  messagingSenderId: "877563731293",
  appId: "1:877563731293:web:d0615c0f0a955e6f935cb4",
  measurementId: "G-9B7CSQCZRQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
