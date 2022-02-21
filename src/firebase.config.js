// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5FRu2tfaaIJHwuB3DLkmY1uYU8oR5BYs",
  authDomain: "bienes-raices-app-c6450.firebaseapp.com",
  projectId: "bienes-raices-app-c6450",
  storageBucket: "bienes-raices-app-c6450.appspot.com",
  messagingSenderId: "595324708970",
  appId: "1:595324708970:web:6acd6d56a6f0f79b46c213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();